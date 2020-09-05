import React from "react";
import "../style/TodoList.scss";
import TodoListItem from "./TodoListItem";
import {ITodo} from "../App";

interface IProps{
    todos : ITodo[];
    onRemove(id:number):void;
    onToggle(id:number):void;
} 

const TodoList =({todos,onRemove,onToggle}:IProps) =>{
    const listItems = todos.map((todo:ITodo)=>{
        return(<TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>)    
    })
    return (
        <div className="TodoList">
            {listItems}
        </div>
    )
}

export default TodoList;