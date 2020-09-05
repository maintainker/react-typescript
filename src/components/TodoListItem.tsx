import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import "../style/TodoListItem.scss";
import {ITodo} from "../App";

interface IProps {
    todo:ITodo;
    onRemove(id:number):void;
    onToggle(id:number):void;
}

const TodoListItem = ({todo,onRemove,onToggle}:IProps) =>{
    const {id,text,checked} = todo;
    return(
    <div className="TodoListItem">
        <div className={!checked? "checkbox":"checkbox checked"} onClick={() => onToggle(id)}>
            {checked? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
            <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={()=>onRemove(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>);
}

export default TodoListItem;