import React, { useState, useCallback } from "react";
import {MdAdd} from "react-icons/md";
import "../style/TodoInsert.scss";

interface IProps  {
    onInsert(text:string):void
}


const TodoInsert = ({onInsert}:IProps) =>{
    const [value,setValue] =useState<string>("");
    
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    },[])
    
    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue("");
        e.preventDefault();
    },[onInsert,value])
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
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

