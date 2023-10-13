'use client'
import React, { useState } from 'react'


const page = () => {
  const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [maintask, setmaintask] = useState([])
const deleteHandler = (i)=>{
  let copytask = [...maintask]
  copytask.splice(i,1)
  setmaintask(copytask)
}
const Sumbithandler = (e)=>{
  e.preventDefault()
setmaintask([...maintask,{title,desc}])
  settitle("") 
  setdesc("")
  console.log(maintask)
}

let renderTask = <h2>no task available</h2>

if(maintask.length>0){
  renderTask = maintask.map((t,i)=>{
    return(
    <li key={i} className='flex items-center justify-between'>  <div className='flex justify-between mb-5 w-2/3'>
    <h5 className='text-2xl font-bold'>{t.title}</h5>
    <h6 className='text-lg font-semibold'>{t.desc}</h6>
   
  </div>
  <button 
  onClick={()=>{
    deleteHandler(i)
  }}
  class="button-57" role="button"><span class="text">DELETE</span><span>ARE YOU SURE</span></button></li>
    )
  })
}
  return (
    <>
    <h1 className='bg-black text-zinc-50 align-bottom font-extrabold p-5 text-2xl text-center border-4 border-orange-700 '> SINU To.Do.List</h1>
    <form onSubmit={Sumbithandler}>
      <input type="text" placeholder='enter your title' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value )
      }}
      className=' border-2 m-2 px-2 py-4 border-zinc-800 rounded'/>
      <input type="text" placeholder='enter task '
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
       className=' border-2 m-5 px-2 py-4 border-zinc-800 rounded'/>
      <button class="button-78"  role="button">ADD TASK'S</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page;