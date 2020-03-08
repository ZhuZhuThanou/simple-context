import React, { Component } from 'react';
import { ToDoContext } from '../context/ToDo-context';
import ToDoInput from '../components/ToDoInput';

class MyToDo extends Component {
    static contextType = ToDoContext;

    constructor(props) {
        super(props);
        this.state = {toDoList:[]};
    }
    componentDidMount() {
        const context = this.context;
        this.setState({toDoList: context.toDoList});
    }

    addToDo = (item) => {
        console.log(item);
        const context = this.context;
        context.addToDo(item);
    }

    render() {
        return (
            <div>
              <ToDoInput addToDo={this.addToDo}/>
              {this.state.toDoList.map((item, index) => (
                   <h1 key={index}>{item.name}</h1>
              ))}
            </div>
        )
    }
} 

export default MyToDo;