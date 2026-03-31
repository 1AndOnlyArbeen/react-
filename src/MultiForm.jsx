import React from "react";
import { useState } from "react";

const MultiForm = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        age:'',
    })
    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)

    }
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value


        }))


    }


  return (
    <div>
      <form onSubmit={handelSubmit} action="">
        <h2> Multiple Input Form </h2>
        <input 
        name="name"
        type="text" 
        placeholder="name"
        value={formData.name}
        onChange={handleChange} />
        <br />


        <input 
        name="email" 
        type="email" 
        placeholder="email"
        value={formData.email}
        onChange={handleChange}  />
        <br />


        <input 
        name="age" 
        type="number" 
        placeholder="age"
        value={formData.age}
        onChange={handleChange}  />
        <br />

        
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default MultiForm;
