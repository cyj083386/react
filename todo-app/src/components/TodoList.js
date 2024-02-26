import React, { useCallback } from 'react';
import './TodoList.css'
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized';

const TodoList = ({todos,onRemove,onToggle}) => {
  const rowRender = useCallback(
    ({index, key, style}) => {
      const todo = todos[index]; // index가 제공되므로 그에 맞춰 todos 리스트를 순회하도록 한다.
      console.log(index, key, style);
      return <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
    },[]
  );
  return (
    <List 
      className='TodoList' width={512} height={513} rowCount={todos.length}
      rowHeight={57} rowRenderer={rowRender} list={todos} style={{outline:'none'}}
    />
  );
};

/* <div className='TodoList'>
{
  todos.map((todo) => 
  <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>)
}
</div> */
export default React.memo(TodoList);