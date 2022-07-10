import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../modal/Modal';

const ReactPortal = () => {
	const [modalIsActive, setModalIsActive] = useState(false);

	function openModalHandler() {
		setModalIsActive(true);
	}
	function closeModalHandler() {
		setModalIsActive(false);
	}

	return (
		<>
			<h3 className='hooks'>React Portal</h3>
			<button type='button' onClick={openModalHandler}>
				Open modal
			</button>
			{ReactDOM.createPortal(
				<Modal
					modalIsActive={modalIsActive}
					closeModalHandler={closeModalHandler}
				/>,
				document.getElementById('portal')
			)}
		</>
	);
};

export default ReactPortal;
