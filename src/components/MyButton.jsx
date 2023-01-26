const MyButton = ({text})=>{
  const clickButton =(title)=>{
    console.log('holi '+title)
  }
  return (
    <button onClick={()=>clickButton(text)}>{text}</button>
  )
}
export default MyButton;