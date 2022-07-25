import React from 'react';
import PageContentWrapper from '../components/Layout/PageContentWrapper/PageContentWrapper';
import TailwindStyle from '../components/Lessons/TailwindStyling/TailwindStyle';

const LessonsPage = () => {
	return (
		<PageContentWrapper className='styling-page' title='Styling'>
			<TailwindStyle />
		</PageContentWrapper>
	);
};

export default LessonsPage;
