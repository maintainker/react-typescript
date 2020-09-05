import React, { useState, useCallback } from "react";
import {MdAdd} from "react-icons/md";
import "../style/TodoInsert.scss";

const TodoInsert = () =>{
    const [value,setValue] =useState<string>("");
    
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    },[])
    
    return(
        <form className="TodoInsert">
            <input 
                type="text" 
                placeholder="할 일을 입력하세요"
                value = {value}
                onChange = {onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};
export default TodoInsert;

