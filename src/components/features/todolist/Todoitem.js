import React from 'react';
import './style.css';

const Todoitem = (props) => {
  return (
    <div className="items">
      <ul>
        <li>Title:{props.title}</li>
        <li>Date{props.date}</li>
      </ul>
    </div>
  );
};

export default Todoitem;
