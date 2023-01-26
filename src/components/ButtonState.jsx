import { useState } from "react"

const ButtonState=()=>{
  const [count,setcount]= useState(0) 
  const hundleClick=()=>{
    setcount(count+1)
  }
  return <button onClick={hundleClick}>button state:{count}</button>
}
export default ButtonState;