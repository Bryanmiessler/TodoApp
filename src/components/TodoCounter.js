import { useContext } from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {

  const { totalTodos, completedTodos } = useContext(TodoContext);

  return(
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDo's</h2>
  )
}

export {TodoCounter};