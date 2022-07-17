import { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Button/Button';
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
			<Button onClick={openModalHandler} className='mt-4'>
				Open modal
			</Button>
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
