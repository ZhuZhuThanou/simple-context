import React, { createContext } from 'react';

export const ToDoContext = createContext({todoList: []});

export  class ToDoContextProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toDoList: [{name: "do tax"}], 
            addToDo: this.addToDo};
    }
    
    addToDo = (toDoItem) => {
        const newState = {...this.state};
        newState.toDoList.push(toDoItem);
        this.setState(newState);
    }
    
    render() {
        return (
            <ToDoContext.Provider value={this.state}>
                {this.props.children}
            </ToDoContext.Provider>
        )
    }
}
