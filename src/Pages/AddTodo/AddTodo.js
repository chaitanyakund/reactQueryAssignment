import React, { useState } from "react";
import { useAddTodosData } from "../../hooks/Todo";
import './AddTodo.css'

const AddContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [task,setTask] = useState("");
  const { mutate } = useAddTodosData();

  const handleAddContact = () => {
    const data = { name, number, task };
    mutate(data);
  };
  return (
    <div className="textInput">
      <div className="personInputContainer">
      <p>Person Name : </p>
      <input
      className="inputContainer"
        type="text"
        placeholder="Person Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>


      <div className="personInputContainer">
      <p>Task Number : </p>
      <input
      className="inputContainer"
        type="number"
        placeholder="Task Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      </div>


      <div className="personInputContainer">
      <p>Task : </p>
      <input
      className="inputContainer"
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      </div>
     
      
    
      <button className="getButton" onClick={handleAddContact}>Add Todo</button>
    </div>
  );
};

export default AddContact;
