import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import StatusTodo from './StatusTodo'
import TodoList from './TodoList'
import FooterActions from './FooterActions'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'



export default function TodoForm() {
 const [listData,setListData] = useState([]);
 const [loading,setLoading] = useState(false);
 const handleListData = async ()=> {
   setLoading(true); 
  try {
    const res = await axios.get(`http://localhost:3000/todolist`);
     setListData(res.data);
     console.log("Response: ", res)
    
  } catch (error) {
    console.log("Error: ", error)
    
  } finally {
    setLoading(false);
  }

}
 useEffect(()=>{
  handleListData();
 }, []);

 
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center w-full'>
        <div className='max-w-md w-full p-6 bg-white rounded-lg shadow'>
        <h1 className='text-center text-2xl font-semibold mb-4'>Quản lý công việc </h1>
        <AddTodo/>
        <StatusTodo/>
        {loading ? (
          <div className="flex justify-center my-4">
            <ClipLoader color="#3b82f6" size={35} />
          </div>
        ) : (
          <TodoList todos={listData} />
        )}
        <FooterActions/>
        </div>
    </div>
  )
}
