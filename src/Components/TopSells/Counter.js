import React, { useState } from "react";
import { Card, Button, Alert,message } from 'antd'
function Counter(props) {
  // Set the initial count state to zero, 1
  const [count, setCount] = useState(1);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => { 
    if(count === 0) {
        return
    }
    setCount(count-1)
}
  return (
    
      <div>
        <Button onClick={handleDecrement}>-</Button>
        <span> {count}</span>
        <Button onClick={handleIncrement}>+</Button>
       
      </div>
      
   
  );
}

export default Counter;