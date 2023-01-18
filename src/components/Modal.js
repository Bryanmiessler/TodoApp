import { createPortal } from 'react-dom';
import '../styles/Modal.css';
import { TodoContext } from '../TodoContext/TodoContext';
import { Fragment, useContext } from 'react';

function Modal({ children }){

  const { setOpenModal } = useContext(TodoContext)

  const onClickModal = ()=>{
    setOpenModal(prevState => !prevState);
  }
  return createPortal(
    <Fragment>
    <main className='container'>
      <div className='container-children'>
          {children}
      </div>
    </main>
    <div className='ModalBackground' onClick={onClickModal}/>
    </Fragment>,
    document.querySelector('#modal')
  );


}

export {Modal};