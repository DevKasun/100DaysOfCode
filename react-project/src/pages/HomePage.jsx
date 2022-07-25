import React from 'react';
import PageContentWrapper from '../components/Layout/PageContentWrapper/PageContentWrapper';
import ReactHooks from '../components/Lessons/ReactHooks/ReactHooks';
import ReactPortal from '../components/Lessons/ReactPortal/ReactPortal';

const HomePage = () => {
	return (
		<PageContentWrapper
			className='home-page'
			title='React hooks, React Portal'
		>
			<ReactHooks />
			<ReactPortal />
		</PageContentWrapper>
	);
};

export default HomePage;
