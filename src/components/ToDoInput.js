import React, { useState } from 'react';

const ToDoInput = (props) => {
    const [toDo, setToDo] = useState("");
    const updateToDo = (e) => {
        setToDo(e.target.value);
    }

    const addToDo = (e) => {
        e.preventDefault();
        props.addToDo({name: toDo});
        setToDo('');
    }

    return (
        <form onSubmit={addToDo}>
            <input className="App-input" type="text" value={toDo} name="toDoItem" placeholder="Add your to do here" onChange={updateToDo}/>
            <button className="App-button">Add</button>
            <div className="App-input-text">{toDo}</div>
        </form>
    )
}

export default ToDoInput;