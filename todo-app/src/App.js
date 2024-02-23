import React, { useCallback, useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function createBulkTodos(){
  const array = [];
  for (let index = 0; index < 2500; index++) {
    array.push({id:index,text:'할일'+(index+1),checked:false});
  }
  return array;
}


const App = () => {
  const [todos,setTodos] = useState(createBulkTodos);
  const onToggle = useCallback((id) =>{
    // 전체리스트(배열)을 map()으로 순회
    setTodos(todos.map(todo => 
      // {spread 연산자}로 todo for문 돌리고, todo.checked 값을 반전함
      todo.id === id? {...todo, checked:!todo.checked} : todo)
    );
  })
  const nextId = useRef(2501); //id 관리용으로 다음번호를 붙여줌
  const onInsert = useCallback((text) => {
    const nextTodo={id:nextId.current, text:text, checked:false};
    setTodos(todos.concat(nextTodo));
    nextId.current = nextId.current + 1;
  },[todos]);

  //TodoListItem에서 remove button click -> id
  const onRemove = useCallback(
    (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    },[todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      {/* props로 내리기 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
