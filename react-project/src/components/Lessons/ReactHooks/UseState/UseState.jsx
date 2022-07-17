import { useState } from 'react';
import Users from './users/Users';

const UseState = () => {
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

	return (
		<>
			<h3 className='hooks'>useState</h3>
			<Users userData={userData} />
		</>
	);
};

export default UseState;
