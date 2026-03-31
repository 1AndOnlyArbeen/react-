import { useState } from "react"


const LikeButton = () => {
    const [liked , setLiked]=useState(false)
  return (
    <div>
        <button onClick={()=> setLiked(!liked)} >
            {liked? "❤️ liked ":"🩶 Like"} 
        </button>
      
    </div>
  )
}

export default LikeButton
