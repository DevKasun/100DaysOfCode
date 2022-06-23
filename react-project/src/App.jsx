import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal/Modal';
import Users from './components/users/Users';

function App() {
	const [modalIsActive, setModalIsActive] = useState(false);
	const [message, setMessage] = useState('Hi there, how are you?');
	const [count, setCount] = useState(0);
	const [userData, setUserData] = useState([
		{
			id: 1,
			name: 'Kasun',
			job: 'Software Engineer',
		},
		{
			id: 2,
			name: 'billy',
			job: 'Lawyer',
		},
	]);

	useEffect(() => {
		console.log('USE EFFECT FUNCTION TRIGGERED');
	});
	useLayoutEffect(() => {
		console.log('USE LAYOUT EFFECT FUNCTION TRIGGERED');
	});

	useEffect(() => {
		console.log('🐶executed after render phase'); // mounting
		setTimeout(() => {
			setMessage("I'm fine, thanks for asking.");
		}, 1000);
		return () => {}; // cleanup function
	}, [setCount]); // updating

	useEffect(() => {
		async function getPosts() {
			const posts = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=10'
			).then((response) => response.json());

			console.log(posts);
		}

		getPosts();
	});

	console.log('🐉executed at render phase');

	function openModalHandler() {
		setModalIsActive(true);
	}
	function closeModalHandler() {
		setModalIsActive(false);
	}

	function clickOutSideTheModal(e) {
		if (modalIsActive && ref.current && !ref.current.contains(e.target)) {
			setModalIsActive(false);
		}
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h3 className='hooks'>React Portal</h3>
				<button type='button' onClick={openModalHandler}>
					Open modal
				</button>
				{ReactDOM.createPortal(
					<Modal
						modalIsActive={modalIsActive}
						closeModalHandler={closeModalHandler}
					/>,
					document.getElementById('portal')
				)}
				<h3 className='hooks'>useState</h3>
				<Users userData={userData} />

				<h3 className='hooks'>useEffect</h3>
				<button onClick={() => setCount(count + 1)}>{count}</button>
				<h3 style={{ paddingTop: '1em' }}>{message}</h3>
			</header>
		</div>
	);
}

export default App;
