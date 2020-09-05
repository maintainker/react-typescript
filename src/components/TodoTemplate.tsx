import React, {ReactNode } from "react";
import "../style/TodoTemplate.scss";
type PropsTypes = {
    children:ReactNode;
}


const TodoTemplate = ({children}:PropsTypes) =>{
    return (
    <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
    </div>);
}

export default TodoTemplate;