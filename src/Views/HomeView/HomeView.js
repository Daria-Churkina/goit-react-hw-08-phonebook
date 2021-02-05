import React from 'react';
import s from '../HomeView/HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <div>
      <h1 className={s.title}>Happy to see you here.</h1>
      <h2 className={s.subtitle}>Go ahead and Register or Log in! </h2>
    </div>
  </div>
);

export default HomeView;
