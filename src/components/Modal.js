import { createPortal } from 'react-dom';
import '../styles/Modal.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Modal({ children }){

  return createPortal(
    <div className="ModalBackground" >
      {children}
    </div>,
    document.querySelector('#modal')
  );


}

export {Modal};