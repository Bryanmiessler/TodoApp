import '../styles/TodoItem.css';
import { MdDelete } from 'react-icons/md';
import { FaCheckSquare } from 'react-icons/fa';

function TodoItem (props) {

  return(
    <li className='TodoItem'>
      {/* <span
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        √
      </span> */}
      <FaCheckSquare
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      {/* <span
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span> */}
      <MdDelete
      className="Icon Icon-delete"
      onClick={props.onDelete}
      />
    </li>
  )
}

export { TodoItem };