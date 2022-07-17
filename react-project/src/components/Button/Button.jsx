import React from 'react';

const Button = (props) => {
	return (
		<button
			type='button'
			onClick={props.onClick}
			style={props.style}
			className='bg-emerald-400 hover:bg-emerald-500 text-slate-50 border-0 px-10 py-3 rounded-lg shadow-md'
		>
			{props.children}
		</button>
	);
};

export default Button;
