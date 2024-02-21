import React from 'react';

const Iteration = () => {
  const names = ['javascript', 'jQuery', 'React'];
  const nameList = names.map((name,index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ul>
        {nameList}
      </ul>
    </div>
  );
};

export default Iteration;