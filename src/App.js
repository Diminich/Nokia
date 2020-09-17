import React from 'react';
import style from './App.module.scss';
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import InnovationNewsBlog from "./components/innovationNewsBlog/InnovationNewsBlog";
import AdditionalInformation from "./components/additionalInformation/AdditionalInformation";

const App = () => {
  return (
    <div className={style.wrapper}>
        <Header />
        <HomePage />
        <InnovationNewsBlog />
        <AdditionalInformation />
    </div>
  );
}

export default App;
