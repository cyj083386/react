import React from 'react';
import './TodoListItem.css';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md'

const TodoListItem = ({todo,onRemove,onToggle}) => {
  const{id,text,checked} = todo;

  return (
    <div className='TodoListItem'>
      <div className={checked? 'checkbox checked':'checkbox'} onClick={() => onToggle(id)}>
        {
          checked ? <MdCheckBox />:<MdCheckBoxOutlineBlank/>
        }

        <div className='text'>{text}</div>
      </div>
      <div className='remove'>
        <div className='remove' onClick={() => onRemove(id)}><MdRemoveCircleOutline /></div>
      </div>
    </div>
  );
};

export default TodoListItem;