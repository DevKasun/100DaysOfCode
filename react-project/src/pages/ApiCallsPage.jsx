import React from 'react';
import PageContentWrapper from '../components/Layout/PageContentWrapper/PageContentWrapper';
import Client from '../components/Lessons/HandleApiCalls/Client';

const ApiCallsPage = () => {
	return (
		<PageContentWrapper
			className='forms-page w-full'
			title='Handle API calls'
		>
			<Client />
		</PageContentWrapper>
	);
};

export default ApiCallsPage;
