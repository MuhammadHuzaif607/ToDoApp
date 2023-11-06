import React from 'react';
import { useState } from 'react';
import Layout from './components/layout';
import Tododata from './components/features/todolist/tododata';
import Todoform from './components/features/todoform';
var i = 0;
const App = () => {
  const [datas, setdatas] = useState([]);

  const OnSaveDataHandler = (prevdata) => {
    i = i + 1;
    const data = {
      ...prevdata,
      id: i,
    };
    setdatas((prevDatas) => [data, ...prevDatas]);
  };

  const updateData = (id, updatedData) => {
    const updatedDatas = datas.map((data) => {
      if (data.id === id) {
        return {
          id: data.id,
          title: updatedData.title,
          date: updatedData.date,
        };
      } else {
        return data;
      }
    });
    setdatas(updatedDatas);
  };
  const deletedata = (id) => {
    console.log(id);
    const filterArr = datas.filter((data) => +data.id !== +id);
    setdatas(filterArr);
    console.log(filterArr);
  };
  return (
    <section className="form">
      <Layout>
        <Todoform OnSaveData={OnSaveDataHandler} />
        <Tododata datas={datas} deletedata={deletedata} Onupdate={updateData} />
      </Layout>
    </section>
  );
};

export default App;
