import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NosSolutions } from './pages/NosSolutions';
import { BecomePartner } from './pages/BecomePartner';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/nos-solutions" element={<NosSolutions />} />
				<Route path="/devenir-partenaire" element={<BecomePartner />} />
			</Routes>
		</Router>
	);
}
