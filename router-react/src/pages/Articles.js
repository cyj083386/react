import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle ={color:'green',fontSize:21};
  return (
    <div>
      <Outlet />
      <NavLink to='/articles/1' style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글1</NavLink>|
      <NavLink to='/articles/2' style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글2</NavLink>|
      <NavLink to='/articles/3' style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글3</NavLink>|
    </div>
  );
};

export default Articles;