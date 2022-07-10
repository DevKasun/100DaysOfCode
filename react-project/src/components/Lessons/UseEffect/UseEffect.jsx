import { useEffect, useState } from 'react';

const UseEffect = () => {
	const [message, setMessage] = useState('Hi there, how are you?');
	const [count, setCount] = useState(0);

	useEffect(() => {
		// console.log('🐶executed after render phase'); // mounting
		setTimeout(() => {
			setMessage("I'm fine, thanks for asking.");
		}, 1000);
		return () => {}; // cleanup function
	}, [setCount]); // updating

	useEffect(() => {
		async function getPosts() {
			const posts = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=10'
			).then((response) => response.json());

			// console.log(posts);
		}
		getPosts();
	});
	return (
		<>
			<h3 className='hooks'>useEffect</h3>
			<button onClick={() => setCount(count + 1)}>Clicks {count}</button>
			<h3 style={{ paddingTop: '1em' }}>{message}</h3>
		</>
	);
};

export default UseEffect;
