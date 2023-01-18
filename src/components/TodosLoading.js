import '../styles/TodosLoading.css';

function TodosLoading(){
  return (
  <div className='LoadingTodo-container'>
    <spam className='LoadingTodo-completeIcon'></spam>
    <p className='LoadingTodo-text'>Cargando To-do's...</p>
    <spam className='LoadingTodo-deleteIcon'></spam>
  </div>
  );
}

export { TodosLoading };