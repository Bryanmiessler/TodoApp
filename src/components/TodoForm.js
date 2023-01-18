import { useContext, useState } from 'react';
import '../styles/TodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = useState('');

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return(
    <form onSubmit={onSubmit}>
      <label for='task'>Agregar tarea</label>
      <textarea
      onChange={onChange}
      value={newTodoValue}
      id='task'
      placeholder='Digite la nueva tarea'
      />

      <div className="TodoForm-buttonContainer">
        <button type='button'
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
        >
        Cancelar
        </button>
        <button
        type='submit'
        className="TodoForm-button TodoForm-button--add"
        >
        Añadir
        </button>
      </div>
    </form>
  )
}

export {TodoForm};