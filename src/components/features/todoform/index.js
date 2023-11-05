import React from 'react';
import { Fragment, useState } from 'react';
import './style.css';
let id = 0;
const Todoform = ({ OnSaveData }) => {
  const [tododata, settododata] = useState({
    title: '',
    date: '',
    id: '',
  });
  const Onchangehandler = (e) => {
    settododata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(tododata.title);
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();

    OnSaveData(tododata);
    console.log(tododata);
    settododata({
      title: '',
      date: '',
      id,
    });
    id += 1;
  };
  return (
    <Fragment>
      <div className="main">
        <h1>Todo-App</h1>
        <form action="" onSubmit={OnSubmitHandler}>
          <div className="form-field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={tododata.title}
              id="title"
              required
              name="title"
              onChange={Onchangehandler}
            />
          </div>
          <div className="form-field">
            <label htmlFor="">Date</label>
            <input
              type="date"
              value={tododata.date}
              id="date"
              required
              name="date"
              onChange={Onchangehandler}
              min="2019-1-1"
              max="2023-11-4"
            />
          </div>
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Todoform;
