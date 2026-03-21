import React from 'react'

const Condition = () => {
    
    const isLoggedIn = true;

    // let message;
    
    // if(!isLoggedIn){
    //     message = <h2> Please login </h2>
    // }else{
    //     message = <h2> Welocme user !</h2>
    // }
    // return (
    // <div> {message}</div>)

    // using ternary operator 

    return(
        <div>
            {isLoggedIn ? <h2> Welocme user !</h2> :<h2> Please login </h2> }
        </div>
    )
  
}

export default Condition
