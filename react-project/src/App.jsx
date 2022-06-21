import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal/Modal';
import Users from './components/users/Users';

function App() {
    const [modalIsActive, setModalIsActive] = useState(false);
    const ref = useRef();
    const [userData, setUserData] = useState([
        {
            id: 1,
            name: 'Kasun',
            job: 'Software Engineer',
        },
        {
            id: 2,
            name: 'billy',
            job: 'Lawyer',
        },
    ]);

    function openModalHandler() {
        setModalIsActive(true);
    }
    function closeModalHandler() {
        setModalIsActive(false);
    }

    function clickOutSideTheModal(e) {
        if (modalIsActive && ref.current && !ref.current.contains(e.target)) {
            setModalIsActive(false);
        }
    }

    console.log(userData);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <button type='button' onClick={openModalHandler}>
                    Open modal
                </button>
                {ReactDOM.createPortal(
                    <Modal
                        ref={ref}
                        modalIsActive={modalIsActive}
                        closeModalHandler={closeModalHandler}
                    />,
                    document.getElementById('portal')
                )}
                <Users userData={userData} />
            </header>
        </div>
    );
}

export default App;
