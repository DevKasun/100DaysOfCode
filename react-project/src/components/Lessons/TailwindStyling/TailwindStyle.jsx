import React from 'react';
import Button from '../../Button/Button';

const TailwindStyle = () => {
	return (
		<section>
			<p className='pt-4'>
				In here I'm using <strong>TailWind CSS⚡</strong> for styling
				react components
			</p>
			<div className='made-with-tailwindcss pt-8'>
				<Button>Button</Button>
			</div>
		</section>
	);
};

export default TailwindStyle;
