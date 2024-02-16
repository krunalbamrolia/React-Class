import React, { useRef } from 'react'

const Ref = () => {
    let fname = useRef()
    let lname =useRef()
    let submit=()=>{

        const data={
            fname:fname.current.value,
            lname:lname.current.value
        }
        console.log(data);
    }
  return (
    <div>
        <b>useRef use</b><br /><br />
        <input type="text" placeholder='First-Name' ref={fname} /><br/>
        <input type="text" placeholder='Last-Name' ref={lname} /><br/>
        <button onClick={submit}>Click me</button><br /><hr /><br />
    </div>
  )
}

export default Ref