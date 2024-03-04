import React, { useEffect, useState } from 'react'
import Heading1 from '../../Atoms/Heading1';
import Heading2 from '../../Atoms/Heading2';

const Basic = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, []);   // infinity call 
  return (    
    <div className="container mt-5">
        <Heading1 text="Simple Infinity Counter" />
            <div className="text-center">
                <Heading2 text={`${seconds}s`} />
            </div>
        </div>
  )
}

export default Basic