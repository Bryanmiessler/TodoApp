import { useContext } from 'react';
import '../styles/TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch(){
  const {searchValue, setsearchValue} = useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value);
  }

  return(
      <input
      className='TodoSearch'
      placeholder="Digite su busqueda"
      value={searchValue}
      onChange={onSearchValueChange}
      />
  );
}

export {TodoSearch};