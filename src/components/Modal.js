import { createPortal } from 'react-dom';
import '../styles/Modal.css';

function Modal({ children }){

  return createPortal(
    <div className="ModalBackground" >
      {children}
    </div>,
    document.querySelector('#modal')
  );


}

export {Modal};