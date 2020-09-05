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
}


const TodoListItem = ({todo}:IProps) =>{
    const {text,checked} = todo;
    return(
    <div className="TodoListItem">
        <div className={!checked? "checkbox":"checkbox checked"}>
            {checked? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
            <div className="text">{text}</div>
        </div>
        <div className="remove">
            <MdRemoveCircleOutline/>
        </div>
    </div>);
}

export default TodoListItem;