import React from 'react';
import Todoitem from './Todoitem';

const Tododata = ({ datas, deletedata, Onupdate }) => {
  return (
    <div className="datas">
      {datas.map((el) => {
        return (
          <Todoitem
            title={el.title}
            date={el.date}
            id={el.id}
            Ondeletedata={deletedata}
            datas={datas}
            onUpdateData={Onupdate}
          ></Todoitem>
        );
      })}
    </div>
  );
};

export default Tododata;
