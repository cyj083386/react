import React, {useState} from 'react';

const Iteration2 = () => {
  const [names,setNames] = useState(
    [
      {id:1,text:'javascript'},
      {id:2,text:'jQuery'},
      {id:3,text:'React'}
    ]
  );
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
  return (
    <div>
      <ul>
        {nameList}
      </ul>
    </div>
  );
};

export default Iteration2;