import React, { Component } from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css'
class Todo extends Component {

    constructor(props) {
        super(props)
        let list = JSON.parse(window.localStorage.getItem("todo")) || [{ time: null, reminder: null }];
        // list = JSON.parse(list);
        this.state = {
            todo: list
        }
    }

    changeList = (event, i, key) => {

        let oldTodo = this.state.todo;
        oldTodo[i] = {
            ...oldTodo[i],
            [key]: event.target.value
        }
        this.setState({
            todo: oldTodo
        })

    }
    saveList = () => {
        let filteredTodo = [];
        let todoTime = [];
        this.state.todo.map(obj => {
            if (obj.time && obj.reminder) {
                filteredTodo.push(obj)
                todoTime.push(obj.time)
            }
        })
        window.localStorage.setItem("todo", JSON.stringify(filteredTodo))
        window.localStorage.setItem("todo_time", JSON.stringify(todoTime))
        this.setState({
            todo: filteredTodo
        })

    }
    addList = () => {
        const oldTodo = this.state.todo;
        oldTodo.push({ time: null, reminder: null });
        this.setState({
            todo: oldTodo
        })
    }
    removeItem = (index) => {
        let todos = this.state.todo
        this.setState({
            todo: todos.split(index, 1)
        })
    }
    render() {
        return (

            <div style={{ width: "100%" }}>
                <div className="main-heading">TO-DO</div>

                <div style={{ width: "90%", marginLeft: "2%", marginTop: "40px", height: "300px", overflowY: "scroll" }}>
                    <ol>
                        {
                            this.state.todo.map((item, i) => {
                                return <li style={{ marginBottom: "10px" }}>
                                    <div style={{ width: "100%" }}>
                                        <input onChange={(e) => { this.changeList(e, i, "time") }} value={item.time} type="time" placeholder="00:00:00" />
                                        {/* <span onClick={() => { this.removeItem(i) }} style={{ cursor: "pointer" }}> X </span> */}
                                         <br />
                                        <input onChange={(e) => { this.changeList(e, i, "reminder") }} value={item.reminder} className="text-input" type="text" />

                                    </div>
                                </li>
                            })
                        }

                    </ol>

                </div>
                <div className="todo-button-container">
                    <button onClick={this.addList} style={{ marginRight: "20px" }}>Add</button>
                    <button onClick={this.saveList}>Finish</button>
                </div>

            </div>


        )
    }

}

export default Todo;