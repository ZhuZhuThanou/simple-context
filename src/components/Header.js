import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDo-context';

const Header = (props) => {
    const value = useContext(ToDoContext);
    const numberOfToDos = value.toDoList.length;
    return (
        <div>
            <h1>I have {numberOfToDos} to-do item(s) remaining</h1>
        </div>
    )
}

export default Header;