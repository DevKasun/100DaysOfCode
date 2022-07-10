import { useEffect, useLayoutEffect, useState } from 'react';

const UseLayoutEffect = () => {
	const [showText, setShowText] = useState(false);
	const [marginValue, setMarginValue] = useState('2em');

	// useLayoutEffect(() => {
	// 	setMarginValue('2em');
	// }, [marginValue]);

	useEffect(() => {
		setMarginValue('2em');
	}, [marginValue]);

	return (
		<>
			<h3 className='hooks'>useLayoutEffect</h3>
			<button type='button' onClick={() => setShowText(true)}>
				Click to show text
			</button>
			{showText ? (
				<p style={{ marginTop: `${marginValue}` }}>Hi developers!</p>
			) : null}
		</>
	);
};

export default UseLayoutEffect;
