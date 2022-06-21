import React from 'react';
import classes from './Modal.module.css';

const Modal = React.forwardRef((props, ref) => {
    return (
        <>
            {props.modalIsActive && (
                <div className={classes['modal-backdrop']} ref={ref}>
                    <div className={classes['modal-container']}>
                        <div className={classes['modal-close']}>
                            <span onClick={props.closeModalHandler}>❌</span>
                        </div>
                        <div className={classes['modal-content']}>
                            <h3>⚡Modal⚡</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Modal;
