import img1 from './assets/images/img1.jpg'
const MyButton = ()=>{
  return (
    <button>Soy un boton</button>
  )
}

const Tenario1=()=>{
  return(
  <>
    <h1>online</h1>  
  </>)
}
const Tenario2=()=>{
  return(
  <>
    <h1>offline</h1>
  </>)
}
const App = () => {
  const title="Mi titulo desde una constante";
  const classTitle = "text-center";
  //const pathImg=img1;
  const user=false;
  const fruts=['🍙','🍣','🍤','🥡'];
  return (
    <>
      <h1 className={classTitle}> {title.toLocaleUpperCase()}</h1>
      <img src={img1} alt={`imagen-${title}`}/>
      <MyButton/>
      {user && <Tenario1/>}
      <ul>
        {fruts.map((frut,index)=>(
          <li key={index}>
            {frut}-{index}
          </li>
        ))}
      </ul>
    </>
  )
};
export default App;