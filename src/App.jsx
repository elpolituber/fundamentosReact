import img1 from './assets/images/img1.jpg'
const MyButton = ({text})=>{

  return (
    <button>{text}</button>
  )
}

const WelcomeText=({user})=>(user ? <h1>online</h1>:<h1>offline</h1>);  


const ItemFrut=({frut})=>{
  return(
    <li>{frut}</li>
  )
}
const App = () => {
  const title="Mi titulo desde una constante";
  const classTitle = "text-center";
  //const pathImg=img1;
  const user=true;
  const fruts=['🍙','🍣','🍤','🥡'];
  return (
    <>
      <h1 className={classTitle}> {title.toLocaleUpperCase()}</h1>
      <img src={img1} alt={`imagen-${title}`}/>
      <MyButton text='Boton 1'/>
      <MyButton text='Boton 2'/>
      <MyButton text='Boton 3'/>
       <WelcomeText user={user}/>
      <ul>
        {fruts.map((frut,index)=>(
          <ItemFrut key={index} frut={frut}/>
        ))}
      </ul>
    </>
  )
};
export default App;