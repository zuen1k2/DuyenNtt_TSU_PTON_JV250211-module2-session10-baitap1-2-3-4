import React from 'react'
import TodoItems from './TodoItems'

export default function TodoList({todos =[]}) {
  console.log("todos: ", todos);
  return (

        <ul className='space-y-2 mb-4 max-h-[200px] overflow-y-auto'>
          {todos.map((item)=>(
            <TodoItems 
            key={item.id}
            text={item.todo}
            completed={item.completed}
            />
           
            
          ))}
          
           </ul>
  )
}
