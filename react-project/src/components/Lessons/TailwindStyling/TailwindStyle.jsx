import React from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import cardImage from '../../../assets/cyclist.jpg';
import Form from '../../Form/Form';
import Label from '../../Label/Label';
import Input from '../../Input/Input';

import formBg from '../../../assets/cyclist.jpg';

const TailwindStyle = () => {
	return (
		<section>
			<p className='pt-4'>
				In here I'm using <strong>TailWind CSS⚡</strong> for styling
				react components
			</p>
			<div className='made-with-tailwindcss pt-8 flex flex-col gap-6 justify-center items-center md:flex-row md:items-start'>
				<Button className='bg-blue-400 hover:bg-blue-500'>
					Button
				</Button>
				<Button className='bg-yellow-400 hover:bg-yellow-500'>
					Button
				</Button>
				<Button className='bg-red-400 hover:bg-red-500'>Button</Button>
			</div>
			<div className='made-with-tailwindcss pt-8 flex flex-col gap-6 justify-center items-center md:flex-row md:items-start'>
				<Card>
					<div className='card-image'>
						<img
							src={cardImage}
							className='w-full h-40 object-cover object-center'
							alt='card image'
						/>
					</div>
					<div className='content p-4 pb-8 text-left'>
						<h3 className='text-xl font-bold'>
							Lorem ipsum dolor sit
						</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Facere consequuntur consequatur rerum deserunt
							minus eius ipsa cumque nisi adipisci debitis.
						</p>
					</div>
				</Card>
				<Card>
					<div className='card-image'>
						<img
							src={cardImage}
							className='w-full h-40 object-cover object-center'
							alt='card image'
						/>
					</div>
					<div className='content p-4 pb-8 text-left'>
						<h3 className='text-xl font-bold'>
							Lorem ipsum dolor sit
						</h3>
						<p className='pb-6'>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Facere consequuntur consequatur rerum deserunt
							minus eius ipsa cumque nisi adipisci debitis.
						</p>
						<Button>Select</Button>
					</div>
				</Card>
				<Card>
					<div className='card-image'>
						<img
							src={cardImage}
							className='w-full h-40 object-cover object-center'
							alt='card image'
						/>
					</div>
					<div className='content p-4 pb-8 text-left'>
						<h3 className='text-xl font-bold'>
							Lorem ipsum dolor sit
						</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Facere consequuntur consequatur rerum deserunt
							minus eius ipsa cumque nisi adipisci debitis.
						</p>
					</div>
				</Card>
			</div>
			<Form
				title='Tailwind CSS Form'
				style={{ backgroundImage: `url(${formBg})` }}
			>
				<div className='pb-4'>
					<Label htmlFor='name'>Name</Label>
					<Input type='text' name='name' placeholder='Name' />
				</div>
				<div className='pb-4'>
					<Label htmlFor='email'>Email</Label>
					<Input type='text' name='email' placeholder='Email' />
				</div>
				<div className='pb-4'>
					<Label htmlFor='password'>Password</Label>
					<Input
						type='password'
						name='password'
						placeholder='Password'
					/>
				</div>
				<div>
					<Button type='submit'>Submit</Button>
				</div>
			</Form>
		</section>
	);
};

export default TailwindStyle;
