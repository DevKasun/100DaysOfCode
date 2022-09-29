import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Card/Card';

const Post = ({ posts }) => {
	return (
		<div className='grid gap-4 grid-cols-3 w-full'>
			{posts.map((post) => (
				<React.Fragment key={post.id}>
					<Card className='max-w-none w-full cursor-pointer'>
						<div className='px-4 py-6'>
							<h3 className='text-lg bold font-semibold'>
								{post.title}
							</h3>
							<p>{post.body}</p>
						</div>
					</Card>
				</React.Fragment>
			))}
		</div>
	);
};

export default Post;
