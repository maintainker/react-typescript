import React, {ReactNode } from "react";
import "../style/TodoTemplate.scss";
interface IProps  {
    children:ReactNode;
}


const TodoTemplate = ({children}:IProps) =>{
    return (
    <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
    </div>);
}

export default TodoTemplate;