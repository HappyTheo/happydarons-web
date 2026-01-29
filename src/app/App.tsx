import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NosSolutions } from './pages/NosSolutions';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/nos-solutions" element={<NosSolutions />} />
			</Routes>
		</Router>
	);
}
