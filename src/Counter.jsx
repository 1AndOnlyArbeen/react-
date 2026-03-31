import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount]= useState(0)
    const increase = ()=>{
        setCount(count +1)

    }

    const decrease = ()=>{
        setCount(count -1)

    }

  return (
    <div>

        <h2> This is the counter </h2>
        <h1> Count :{count}</h1>
        <h1> Count :{count}</h1>
        
        <button onClick={increase}> Increase </button>
        <br />
        <button onClick={decrease}> decrease </button>
      
    </div>
  )
}

export default Counter
