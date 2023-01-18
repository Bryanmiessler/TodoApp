import '../styles/EmptyTodos.css';


function EmptyTodos(){
  return (
    <div className="p-container">
      <p className='adelante'>Adelante.</p><br/>
      <p className='crea'>¡Crea tu primer To-do!</p>
      <p className='crea'>Haz click en el boton de añadir.</p>
    </div>
  );
}

export { EmptyTodos };