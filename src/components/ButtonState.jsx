import { useState } from "react"

const ButtonState=()=>{
  const arrayState= useState(0) 
  const stateNumber=arrayState[0]
  const stateFunction=arrayState[1]
  const hundleClick=()=>{
    stateFunction(stateNumber+1)
  }
  return <button onClick={hundleClick}>button state:{stateNumber}</button>
}
export default ButtonState;