import React from 'react';

const PageContentWrapper = (props) => {
	return (
		<div className={props.className}>
			<h1 className='title'>{props.title}</h1>
			{props.children}
		</div>
	);
};

export default PageContentWrapper;
