const MyButton = ()=>{
  return (
    <button>Soy un boton</button>
  )
}

const Tenario1=()=>{
  return
  <>
    online
  </>
}
const Tenario2=()=>{
  return
  <>
    <h1>offline</h1>
  </>
}
const App = () => {
  const title="Mi titulo desde una constante";
  const classTitle = "text-center";
  const pathImg="https://picsum.photos/200/300";
  const user=true;
  return (
    <>
      <h1 className={classTitle}> {title.toLocaleUpperCase()}</h1>
      <img src={pathImg} alt={`imagen-${title}`}/>
      <MyButton/>
      {user ? Tenario1:Tenario2}
    </>
  )
};
export default App;