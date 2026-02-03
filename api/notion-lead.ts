// Inline types to avoid @vercel/node dependency in local dev
interface VercelRequest {
    method?: string;
    body: Record<string, unknown>;
}

interface VercelResponse {
    status: (code: number) => VercelResponse;
    json: (data: unknown) => void;
    end: () => void;
    setHeader: (name: string, value: string) => void;
}

// Notion API endpoint
const NOTION_API_URL = 'https://api.notion.com/v1/pages';

interface LeadData {
    prenom: string;
    nom: string;
    email: string;
    fonction?: string;
    wantsCalendar: boolean;
}


export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prenom, nom, email, fonction, wantsCalendar } = req.body as unknown as LeadData;


    // Validate required fields
    if (!prenom || !nom || !email) {
        return res.status(400).json({ error: 'Missing required fields: prenom, nom, email' });
    }

    // Check for Notion credentials
    const notionApiKey = process.env.NOTION_API_KEY;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    if (!notionApiKey || !notionDatabaseId) {
        console.error('Missing Notion credentials');
        // Still return success for user experience, but log the issue
        return res.status(200).json({
            success: true,
            message: 'Download started (Notion not configured)',
            warning: 'Notion credentials not configured'
        });
    }

    try {
        // Create entry in Notion database
        const notionResponse = await fetch(NOTION_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${notionApiKey}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28',
            },
            body: JSON.stringify({
                parent: { database_id: notionDatabaseId },
                properties: {
                    'Prénom': {
                        title: [
                            {
                                text: { content: prenom }
                            }
                        ]
                    },
                    'Nom': {
                        rich_text: [
                            {
                                text: { content: nom }
                            }
                        ]
                    },
                    'Email': {
                        email: email
                    },
                    'Fonction': {
                        rich_text: [
                            {
                                text: { content: fonction || '' }
                            }
                        ]
                    },
                    'Calendrier 2026': {
                        checkbox: wantsCalendar
                    },
                    'Date': {
                        date: { start: new Date().toISOString().split('T')[0] }
                    },
                    'Source': {
                        select: { name: 'Catalogue' }
                    }
                }
            })
        });

        if (!notionResponse.ok) {
            const errorData = await notionResponse.json();
            console.error('Notion API error:', errorData);
            // Still return success for user - don't block download
            return res.status(200).json({
                success: true,
                message: 'Download started',
                warning: 'Lead capture failed'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Lead captured and download started'
        });

    } catch (error) {
        console.error('Error saving to Notion:', error);
        // Return success anyway - prioritize user download experience
        return res.status(200).json({
            success: true,
            message: 'Download started',
            warning: 'Lead capture error'
        });
    }
}
