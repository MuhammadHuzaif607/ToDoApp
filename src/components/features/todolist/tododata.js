import React from 'react';
import Todoitem from './Todoitem';

const Tododata = ({ datas }) => {
  return (
    <div className="datas">
      {datas.map((el) => {
        return <Todoitem title={el.title} date={el.date}></Todoitem>;
      })}
    </div>
  );
};

export default Tododata;
