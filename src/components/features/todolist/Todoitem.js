import React from 'react';
import './style.css';
import { useState } from 'react';

const Todoitem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [updatedData, setUpdatedData] = useState({
    title: '',
    date: '',
  });
  const onChangehandler = (e) => {
    setUpdatedData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name);
  };

  const OnSaveHandler = (e) => {
    e.preventDefault();
    // Hide the edit form
    console.log(updatedData);
    props.onUpdateData(props.id, updatedData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    props.Ondeletedata(props.id);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  if (isEditing) {
    return (
      // Display an edit form with input fields
      <form onSubmit={OnSaveHandler}>
        <div className="list">
          <div className="items">
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={onChangehandler}
            />
            <input
              type="date"
              placeholder="date"
              name="date"
              onChange={onChangehandler}
            />
          </div>
          <div className="btns">
            <button>Save</button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div className="list">
        <div className="items" key={props.id}>
          <ul>
            <li>Title:{props.title}</li>
            <li>Date{props.date}</li>
          </ul>
        </div>
        <div className="btns">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
};

export default Todoitem;
