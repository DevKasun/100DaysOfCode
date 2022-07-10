import logo from './logo.svg';
import './App.css';
import Grid from './components/Layout/Grid/Grid';
import ReactPortal from './components/Lessons/ReactPortal/ReactPortal';
import UseState from './components/Lessons/UseState/UseState';
import UseEffect from './components/Lessons/UseEffect/UseEffect';
import UseRef from './components/Lessons/UseRef/UseRef';
import UseLayoutEffect from './components/Lessons/UseLayoutEffect/UseLayoutEffect';
import UseMemo from './components/Lessons/UseMemo/UseMemo';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Grid>
					<div>
						<ReactPortal />
					</div>
					<div>
						<UseState />
					</div>
					<div>
						<UseEffect />
					</div>
					<div>
						<UseLayoutEffect />
					</div>
					<div>
						<UseRef />
					</div>
					<div>
						<UseMemo />
					</div>
				</Grid>
			</header>
		</div>
	);
}

export default App;
