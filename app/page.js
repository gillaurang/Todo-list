"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const [clearedTasks, setClearedTasks] = useState([])



  const submitHandler = (e)=>{
    e.preventDefault();
    // console.log(title)
    // console.log(desc)
    setmaintask([...maintask, { title, desc }]);



    settitle("");
    setdesc("");
  };

//Delete Task
  const deleteHandler = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let renderTask = <h2>No task Available</h2>


//Clear Task
  const clearHandler = (i) => {
    const taskToClear = maintask[i];
    const updatedMainTasks = [...maintask];
    updatedMainTasks.splice(i, 1);
    setmaintask(updatedMainTasks);
    setClearedTasks([...clearedTasks, taskToClear]);
  }



  if(maintask.length>0){
    renderTask = maintask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
         className='bg-red-400 text-white px-4 py-2 rounded font-bold '>Delete</button>

        <button
        onClick={()=>{
          clearHandler(i)
        }}
         className='bg-gray-400 text-white px-4 py-2 rounded font-bold '>Clear Task</button> 
      </li>
    );
  })
  }
  return (
    <>
      <h1 className='bg-black p-15 m-0 text-5xl text-white text-center'>gillaurang Todo List</h1>
      <form onSubmit={submitHandler}>
        <input className='text-2xl border-zinc-800 border-4 m-5 px-5 py-1'
        placeholder='Enter Task Here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}>
        </input>

        <input className='text-2xl border-zinc-800 border-4 m-5 px-5 py-1 w-1/3'
        placeholder='Enter Task description Here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}>
        </input>

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add task</button>
      </form>
      <hr />

      <div className='p-8 bg-slate-300'>
        <h2 className='text-2xl font-bold mb-4'>Add your Task</h2>
        <ul>
          {renderTask}
        </ul>
      </div>
      <hr />
       <div className='p-8 bg-slate-200 backdrop-blur-sm'>
        <h2 className='text-2xl font-bold mb-4'>Cleared Tasks</h2>
        <ul>
          {clearedTasks.length === 0 ? (
            <li>No cleared tasks</li>
          ) : (
            clearedTasks.map((t, i) => (
              <li key={i} className='flex items-start justify-between mb-3'>
                <div className='flex items-center justify-between w-2/3'>
                  <h5 className='text-xl font-semibold'>{t.title}</h5>
                  <h6 className='text-md font-normal'>{t.desc}</h6>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  )
}

export default page
