import React from 'react';

const Input = (props) => {
	return (
		<>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				ref={props.ref}
				onChange={props.onChange}
				value={props.value}
				placeholder={props.placeholder}
				className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
			/>
		</>
	);
};

export default Input;
