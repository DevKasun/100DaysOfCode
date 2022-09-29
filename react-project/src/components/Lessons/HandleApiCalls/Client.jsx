import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const Client = () => {
	const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const res = await axios.get(apiUrl);
				setPosts(res.data.splice(0, 10));
			} catch (error) {
				setError(error.message);
			}
		};
		setIsLoading(false);
		// call the function
		fetchData();
	}, []);

	let content = <p>No posts</p>;

	if (posts.length > 0) {
		content = <Post posts={posts} apiUrl={apiUrl} />;
	} else if (error) {
		content = <p className='error-message'>{error}</p>;
	} else if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<>
			<div className='my-10'>
				<h1 className='text-xl font-bold'>Json Placeholder - POSTS</h1>
				{content}
			</div>
		</>
	);
};

export default Client;
