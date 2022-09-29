import React from 'react';

const Card = (props) => {
	return (
		<div
			className={`card max-w-xs shadow-lg rounded-xl overflow-hidden duration-300 hover:scale-105 ${props.className}`}
			key={props.key}
		>
			{props.children}
		</div>
	);
};

export default Card;
