import React from 'react';

const Button = (props) => {
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			style={props.style}
			className={`bg-emerald-400 hover:bg-emerald-500 text-base text-slate-50 border-0 px-10 py-2 rounded-lg shadow-md ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
