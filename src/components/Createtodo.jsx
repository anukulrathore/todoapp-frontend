import React from 'react'
import './Createtodo.css'
import { useState } from 'react'

const Createtodo = () => {
    const [title,setTitle] = useState()
    const [description, setDescription] = useState()

  return (
        <div className='container'>
        <input type="text" id='box1'placeholder='Title' onChange={(e)=>{
            setTitle(e.target.value)
        }}/> 
        <br></br>
        <input type="text" id='box2' placeholder='Description' onChange={(e)=>{
            setDescription(e.target.value)
        }}/>
        <br></br>
      <button type='submit' id='btn' onClick={()=>{
        fetch("http://localhost:5000/todo",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "contentType":"application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("To do added successfully");
        })
      }}>submit</button> 
    </div>
   
    
  )
}

export default Createtodo
