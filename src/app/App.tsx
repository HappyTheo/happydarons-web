import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NosSolutions } from './pages/NosSolutions';
import { BecomePartner } from './pages/BecomePartner';
import { Team } from './pages/Team';
import { ScrollToTopHandler } from './components/ScrollToTopHandler';

export default function App() {
	return (
		<Router>
			<ScrollToTopHandler />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/nos-solutions" element={<NosSolutions />} />
				<Route path="/devenir-partenaire" element={<BecomePartner />} />
				<Route path="/notre-equipe" element={<Team />} />
			</Routes>
		</Router>
	);
}
