import img1 from './assets/images/img1.jpg'
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFrut';
import ButtonState from './components/ButtonState';

const App = () => {
  const title="Mi titulo desde una constante";
  const classTitle = "text-center";
  const user=true;
  const fruts=['🍙','🍣','🍤'];
  const frut2=['🥡','🍙','🍣'];
  return (
    <>
      <ButtonState/>
      <h1 className={classTitle}> {title.toLocaleUpperCase()}</h1>
      <img src={img1} alt={`imagen-${title}`}/>
      <MyButton text='Boton 1'/>
      <MyButton text='Boton 2'/>
      <MyButton text='Boton 3'/>
      <WelcomeText user={user}/>
      <ListFruts fruts={fruts}/>
      <ListFruts fruts={frut2}/>
    </>
  )
};
export default App;