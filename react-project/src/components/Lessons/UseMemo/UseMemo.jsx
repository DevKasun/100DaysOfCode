import React, { useCallback, useMemo } from 'react';

const tvseries = [
	{ id: 1, name: 'Stranger Things' },
	{ id: 2, name: 'Demon Slayer' },
];

const UseMemo = () => {
	const productFromMemo = useMemo(() =>
		tvseries.map((show) => {
			return <li key={show.id}>{show.name}</li>;
		})
	);

	const productFromCallback = useCallback(() => {
		tvseries.map((tvshow) => {
			return (
				<li key={tvshow.id}>
					<div>{tvshow.name}</div>
				</li>
			);
		});
	}, [tvseries]);

	return (
		<>
			<h3 className='hooks'>useMemo</h3>
			<p>
				<strong>useMemo</strong>
			</p>
			<ul>{productFromMemo}</ul>
			<br />
			<p>
				<strong>useCallback</strong>
			</p>
			<ul>{productFromCallback}</ul>
		</>
	);
};

export default UseMemo;
