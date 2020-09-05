import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from "./components/TodoTemplate"
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


export interface ITodo {
  id :number,
  text:string,
  checked:boolean

}



const App = () =>{
  const [todos, setTodos] =useState<ITodo[]>([
    {
      id:1,
      text:"react의 기초 알아보기",
      checked:true,
    },
    {
      id:2,
      text:"컴포넌트 스타일링 해보기",
      checked:true,
    },
    {
      id:3,
      text:"일정 관리 앱 만들어 보기",
      checked:false,
    },
  ])
  const nextId = useRef<number>(4);

  const onInsert = useCallback((text:string)=>{
    const todo = {
      id: nextId.current,
      text,
      checked:false
    };
    setTodos([...todos,todo]);
    nextId.current += 1;
  },[todos])
  
  const onRemove = useCallback((id:number)=>{
    setTodos(todos.filter((todo:ITodo)=>todo.id !== id));
  },[todos]);
  
  const onToggle = useCallback((id:number)=>{
    setTodos(
      todos.map((todo:ITodo)=> todo.id === id? {...todo, checked: !todo.checked}:todo)
    )
  },[todos])
  return(
      <TodoTemplate>
          <TodoInsert onInsert={onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
};

export default App;
