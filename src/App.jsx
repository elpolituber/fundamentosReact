const MyButton = ()=>{
  return (
    <button>Soy un boton</button>
  )
}
const App = () => {
  const title="Mi titulo desde una constante"
  const classTitle = "text-center"
  const pathImg="https://picsum.photos/200/300"
  return (
    <>
      <h1 className={classTitle}> {title.toLocaleUpperCase()}</h1>
      <img src={pathImg} alt={`imagen-${title}`}/>
      <MyButton/>
    </>
  )
};
export default App;