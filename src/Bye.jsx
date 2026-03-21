import React from 'react'

const Bye = () => {
  const users = [
    { firstName: "Arbeen", lastName :"Shrestha", Age:23},
    { firstName: "radhika", lastName :"Shrestha", Age:22},
    { firstName: "Aradhya", lastName :"Shrestha", Age:5},
  ];
  function fullName(user){
    return user.firstName + " " + user.lastName
  }

  return (
    <div>
      <h2> Personal Details</h2>

     { users.map((user)=>(
      <ul>
        <li>{fullName(user)} age is {user.Age} years old</li>
      </ul>

      ))}

    
    </div>
  )
}

export default Bye
