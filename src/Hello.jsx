import React from 'react'

const Hello = () => {
  
    const name =" Arbeen !"
    const headingStyle={
      backgroundColor:'pink',
      color:'white',
      padding:'10px',
      borderRadius:'5px'

    }
  return (
    <div>
     <h2 className='bg-pink-800' > Hi there Hello {name}</h2>
     <p style={headingStyle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam cum adipisci. Nesciunt dicta eum porro nostrum modi iste cupiditate facilis, voluptate ad hic doloribus amet nemo qui debitis quo!</p>
      
    </div>
  )
}

export default Hello
