import React, { useEffect, useState } from 'react'
import Button from '../Atoms/Button';
import Heading1 from '../Atoms/Heading1';
import Heading2 from '../Atoms/Heading2';

const BtnStartReset = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setisActive] = useState(false);

    useEffect(()=>{
        let interval = null;

        if(isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            },1000);
        } else if (!isActive && seconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isActive, seconds]); 

    const toggleTimer = () => {
        setisActive(!isActive);
    };

    const resetTimer  = () => {
        setSeconds(0);
        setisActive(false);
    };


  return (
    <div className="container mt-5">
        <Heading1 text="Counter Using Button" />
        <div className="text-center">
            <Heading2 text={`${seconds}s`} />
            <div>
                <Button onClick={toggleTimer} text={isActive ? 'Pause' : 'Start'} />
                <Button onClick={resetTimer} text="Reset" />
            </div>
        </div>
    </div>

  )
}

export default BtnStartReset