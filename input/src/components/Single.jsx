import React, { useState } from 'react'

const Single = () => {
    const[data, setdata]=useState()

    let handle =(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
    }

    const submit =()=>{
        console.log(data);
    }
  return (
    <div>
        <b>One useState use</b><br /><br />
        <input type="text" name='fname' placeholder='First-Name' onChange={handle} /><br/>
        <input type="text" name='lname' placeholder='Last-Name' onChange={handle} /><br/>
        <button onClick={submit}>Click me</button><br /><hr /><br />
    </div>
  )
}

export default Single