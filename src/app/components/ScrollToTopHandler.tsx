import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopHandler() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Handle hash navigation
        if (hash) {
            // Small timeout to ensure content is rendered
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
        // Handle normal navigation (scroll to top)
        else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
}
