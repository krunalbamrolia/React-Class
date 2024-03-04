import React, { useEffect, useState } from 'react'
import Button from '../../Atoms/Button';
import Heading1 from '../../Atoms/Heading1';
import Heading2 from '../../Atoms/Heading2';

const ButtonClickUpDown = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }; 

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

  return (
    <div className="container mt-5">
        <Heading1 text="Counter Using Button" />
            <div className="text-center">
            <Heading2 text={count} />
                <Button onClick={decrement} text="Decrement" />
                <Button onClick={increment} text="Increment" />
            </div>
    </div>

  )
}

export default ButtonClickUpDown