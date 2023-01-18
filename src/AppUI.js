import {TodoCounter} from './components/TodoCounter.js';
import {TodoSearch} from './components/TodoSearch';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoList';
import {CreateTodoButton} from './components/CreateTodoButton';
import { TodoContext } from './TodoContext/TodoContext.js';
import { Modal } from './components/Modal.js';
import { TodoForm } from './components/TodoForm.js';
import { TodosError } from './components/TodosError.js';
import { TodosLoading } from './components/TodosLoading.js';
import { EmptyTodos } from './components/EmptyTodos.js';

import { Fragment, useContext } from 'react';

function AppUi () {
  const {
    error,
    loading,
    searchedTodos,
    finishedTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext);

  return (
  <Fragment>
    <TodoCounter />  
    <TodoSearch />
    <TodoList>
        {error && <TodosError error = {error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => finishedTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
        )
        )}
    </TodoList>

    {!!openModal && (

    <Modal>
      <TodoForm />
    </Modal>

    )}
    <CreateTodoButton />
  </Fragment>)
}

export { AppUi };