import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/Layout/NavBar/NavBar';
import FormsPage from './pages/FormsPage';
import HomePage from './pages/HomePage';
import StylingPage from './pages/StylingPage';

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
						<Route path='/forms' element={<FormsPage />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
