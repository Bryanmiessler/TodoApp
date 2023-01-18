import '../styles/CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';
import { useContext } from 'react';

function CreateTodoButton () {
  const { setOpenModal } = useContext(TodoContext)

  const onClickButton = ()=>{
      // !openModal ? setOpenModal(true) : setOpenModal(false);
      setOpenModal(prevState => !prevState);
  }
  return(
    <button
    className='CreateTodoButton'
    onClick={onClickButton}>
    +
    </button>
  );
}

export { CreateTodoButton }; 