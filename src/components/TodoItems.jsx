import React from 'react'
import { Pencil, Trash2 } from "lucide-react";

export default function TodoItems({text, completed}) {
  return (
   
         <li className="flex items-center justify-between border border-gray-300 px-3 py-2 rounded">
            <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={completed} />
                <span className= {completed ? "line-through" : "" } >{text}</span>
            </label>
            <div className="flex gap-2">
                <Pencil  className="w-4 h-4 text-yellow-500 cursor-pointer"/>
                <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
               

            </div>
        </li>
  
  )
}
