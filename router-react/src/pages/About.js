import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const[searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트</p>
      <p>detail : {detail} </p>
      <p>mode : {mode} </p>
    </div>
  );
};

export default About;