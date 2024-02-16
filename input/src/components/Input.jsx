import React, { useState } from 'react'

const Input = () => {
    const [fname,  setfname] = useState("")
    const [lname,  setlname] = useState("")
    let submit =()=>{
        // console.log (`Your name is ${fname} ${lname}`);
        const data={
            fname,
            lname
        }
        console.log(data);

    }
    

  return (
    <div>
        <b>Simple More useState use</b><br /><br />
        <input type="text" placeholder='First-Name' onChange={(e)=>setfname(e.target.value)} /><br/>
        <input type="text" placeholder='Last-Name' onChange={(e)=>setlname(e.target.value)}/><br/>
        <button onClick={submit}>Click me</button><br /><hr /><br />
    </div>
  )
}

export default Input