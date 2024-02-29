import React, { useEffect, useState } from 'react'
import Button from '../Atoms/Button';
import Heading1 from '../Atoms/Heading1';
import Heading2 from '../Atoms/Heading2';

const StopWatch = () => {
    const [Time, setTime] = useState(0);
    const [Running, setRunning] = useState(false);

    useEffect(() => {
        let  interval;
        if (Running) {
            interval = setInterval(() => {
                setTime(oldTime => oldTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
        }, [Running]);

        const  startWatch = () => {
            setRunning(true);
        };
        const stopWatch = () => {
            setRunning(false);
        };
        const resetWatch = () => {
            setTime(0);
            setRunning(false);
        };

        const formatTime = (time) => {
            const minutes = Math.floor(time /60);
            const seconds = time % 60;
            return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };
       
  return (
    <div className="container mt-5">
        <Heading1 text="Stop Watch" />
            <div className="text-center">
            <Heading2 text={formatTime(Time)} />
                <Button onClick={startWatch} text="START" />
                <Button onClick={stopWatch} text="STOP" />
                <Button onClick={resetWatch} text="RESET" />
            </div>
    </div>
  )
}

export default StopWatch