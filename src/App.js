import React from 'react';
import { useState } from 'react';
import Layout from './components/layout';
import Tododata from './components/features/todolist/tododata';
import Todoform from './components/features/todoform';
var i = 0;
const App = () => {
  const dummydatas = [];
  const [datas, setdatas] = useState(dummydatas);

  const OnSaveDataHandler = (prevdata) => {
    i = i + 1;
    const data = {
      ...prevdata,
      id: i,
    };
    setdatas((prevDatas) => [data, ...prevDatas]);
  };

  return (
    <section className="form">
      <Layout>
        <Todoform OnSaveData={OnSaveDataHandler} />
        <Tododata datas={datas} />
      </Layout>
    </section>
  );
};

export default App;
