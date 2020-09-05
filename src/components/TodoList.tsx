import React from "react";
import "../style/TodoList.scss";
import TodoListItem from "./TodoListItem";
import {ITodo} from "../App";

interface IProps{
    todos : ITodo[]
} 

const TodoList =({todos}:IProps) =>{
    const listItems = todos.map((todo:ITodo)=>{
        return(<TodoListItem todo={todo} key={todo.id}/>)    
    })
    return (
        <div className="TodoList">
            {listItems}
        </div>
    )
}

export default TodoList;