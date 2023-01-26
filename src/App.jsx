import img1 from './assets/images/img1.jpg'
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFrut';

const App = () => {
  const title="Mi titulo desde una constante";
  const classTitle = "text-center";
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
      <ListFruts fruts={fruts}/>
    </>
  )
};
export default App;