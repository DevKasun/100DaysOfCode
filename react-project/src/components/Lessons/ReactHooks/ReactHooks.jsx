import React from 'react';
import Grid from '../../Layout/Grid/Grid';
import ReactPortal from '../../Lessons/ReactPortal/ReactPortal';
import UseState from './UseState/UseState';
import UseEffect from './UseEffect/UseEffect';
import UseLayoutEffect from './UseLayoutEffect/UseLayoutEffect';
import UseRef from './UseRef/UseRef';
import UseMemo from './UseMemo/UseMemo';

const ReactHooks = () => {
	return (
		<section>
			<h1 className='text-4xl pt-4 pb-0'>React Hooks</h1>
			<Grid>
				<div>
					<UseState />
				</div>
				<div>
					<UseEffect />
				</div>
				<div>
					<UseLayoutEffect />
				</div>
				<div>
					<UseRef />
				</div>
				<div>
					<UseMemo />
				</div>
			</Grid>
		</section>
	);
};

export default ReactHooks;
