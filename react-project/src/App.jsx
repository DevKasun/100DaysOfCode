import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Button from './components/Button/Button';
import NavBar from './components/Layout/NavBar/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import StylingPage from './pages/Styling';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<main className='container relative h-full z-5  mx-auto px-4 py-8'>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
					<Routes>
						<Route path='/styling' element={<StylingPage />} />
					</Routes>
					<Routes>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
