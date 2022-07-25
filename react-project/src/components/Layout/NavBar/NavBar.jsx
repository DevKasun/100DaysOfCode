import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/react.png';

const NavBar = () => {
	return (
		<>
			<header className='App-header flex flex-row justify-between items-center bg-emerald-400'>
				<img
					src={logo}
					className='App-logo bg-transparent'
					alt='logo'
				/>
				<nav className='relative z-5'>
					<ul className='flex flex-row gap-x-8'>
						<li className='margin-0 text-xl text-slate-50 hover:text-slate-50'>
							<NavLink to='/'>Basics</NavLink>
						</li>
						<li className='margin-0 text-xl text-slate-50 hover:text-slate-50'>
							<NavLink to='/styling'>Styled Components</NavLink>
						</li>
						<li className='margin-0 text-xl text-slate-50 hover:text-slate-50'>
							<NavLink to='/forms'>Forms</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
