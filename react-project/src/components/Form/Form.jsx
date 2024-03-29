import React from 'react';

const Form = (props) => {
	return (
		<div
			className={`flex items-center justify-center form-wrapper py-12 bg-green-300 rounded-lg ${props.className}`}
		>
			<form
				action={props.action}
				methods={props.method}
				onSubmit={props.onSubmit}
				ref={props.ref}
				className='text-left w-full max-w-2xl p-8 bg-slate-50 shadow-lg rounded-xl overflow-hidden'
			>
				<h3 className='text-xl'>{props.title}</h3>
				{props.children}
			</form>
		</div>
	);
};

export default Form;
