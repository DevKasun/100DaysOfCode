import React from 'react';

const Label = (props) => {
	return (
		<label htmlFor={props.htmlFor} className='block pb-1 pl-1'>
			{props.children}
		</label>
	);
};

export default Label;
