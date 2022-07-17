import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/Layout/NavBar/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
					<Routes>
						<Route path='/lessons' element={<LessonsPage />} />
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
