"use client"
import Image from "next/image";
import { useState } from "react";

interface Task {
  title:string
  description:string
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState<Task[]>([]);

  const submitHandler = (e:any) => {
      e.preventDefault();
      setMainTask([...mainTask,{title,description}]);
      setTitle("");
      setDescription("");
      
  }

  const deletTask = (index:number) => {
    let copyTask = [...mainTask]
    copyTask.splice(index,1);
    setMainTask(copyTask);
  }

 

  let rendorTask:any = <h2>No Task Available!</h2>

  rendorTask = mainTask.map((value,index)=>{
    return <li className="flex item-center justify-between mb-2" key={index}>
      <div className="flex items-center justify-between w-2/3" key={index}>
      <h1 className="text-2xl font-semibold">{value.title}</h1>
      <p className="text-2xl font-midum">{value.description}</p>
    </div>
    <button 
    className="bg-red-400 text-white px-4 py-2 rounded font-bold"
    onClick={()=>{deletTask(index)}}
    >Delete</button>
    </li>
  });

  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">To Do List</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          className="text-2xl border-zinc-200 border-2 m-8 px-4 py-2" 
          placeholder="Enter Task Here" 
          value={title} 
          onChange={(e) => { setTitle(e.target.value) }} 
          />
        <input 
          type="text" 
          className="text-2xl border-zinc-200 border-2 m-8 px-4 py-2" 
          placeholder="Enter Discription" 
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
          />
          <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded">Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
          <ul>
              {rendorTask}
          </ul>
      </div>
      
    </>

  );
}
