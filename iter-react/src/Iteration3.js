import React, {useState} from 'react';

const Iteration3 = () => {
  const [names,setNames] = useState(
    [
      {id:1,text:'javascript'},
      {id:2,text:'jQuery'},
      {id:3,text:'React'}
    ]
  );
  const[nextId,setNextId] = useState(names.length+1);

  const onClick = () => {
    // push가아닌 concat으로 신규 배열생성. 신규로 데이터가 들어와야지만 화면 반영이 되기때문.
    setNames(names.concat({id:nextId, text:'Vue.js'}));
    
    setNextId(nextId+1);
  }
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
  return (
    <div>
      <button onClick={onClick}>add</button>
      <ul>
        {nameList}
      </ul>
    </div>
  );
};

export default Iteration3;