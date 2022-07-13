import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal/Modal';

const ReactPortal = () => {
	const [modalIsActive, setModalIsActive] = useState(false);

	function openModalHandler() {
		setModalIsActive(true);
	}
	function closeModalHandler() {
		setModalIsActive(false);
	}

	return (
		<section>
			<h1 className='title'>React Hooks</h1>
			<button
				type='button'
				onClick={openModalHandler}
				style={{ marginTop: '1em' }}
			>
				Open modal
			</button>
			{ReactDOM.createPortal(
				<Modal
					modalIsActive={modalIsActive}
					closeModalHandler={closeModalHandler}
				/>,
				document.getElementById('portal')
			)}
		</section>
	);
};

export default ReactPortal;
