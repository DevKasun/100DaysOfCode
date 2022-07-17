import { useState, useRef } from 'react';

const UseRef = () => {
	const [refInputValue, setRefInputValue] = useState('');
	const inputRef = useRef();

	function handleUseRefValue() {
		setRefInputValue(inputRef.current.value);
	}

	return (
		<>
			<h3 className='hooks'>useRef</h3>
			<input
				type='text'
				ref={inputRef}
				onChange={handleUseRefValue}
				placeholder='type something'
			/>
			<h4>Input value: {refInputValue}</h4>
		</>
	);
};

export default UseRef;
