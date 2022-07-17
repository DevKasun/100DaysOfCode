import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const NavBar = () => {
	return (
		<>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/lessons'>Lessons</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
