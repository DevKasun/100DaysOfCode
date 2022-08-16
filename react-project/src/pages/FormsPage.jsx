import React from 'react';
import PageContentWrapper from '../components/Layout/PageContentWrapper/PageContentWrapper';
import HandleForm from '../components/Lessons/HandleForms/HandleForm';

const FormsPage = () => {
	return (
		<PageContentWrapper className='forms-page w-full' title='Handle Forms'>
			<HandleForm />
		</PageContentWrapper>
	);
};

export default FormsPage;
