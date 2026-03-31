import { useState } from "react"



const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <button onClick={()=>{
        setIsVisible (!isVisible)

      }}> 

      {isVisible? "Hide":"show"} text
      {isVisible && "This is the text "}
      
      </button>
      
    </div>
  )
}

export default Toggle
