
import './App.css';
import MyFristComponent from './Components/MyFristComponent';
import PropsDisplayer from './Components/PropsDisplayer';
import EventComponent from './/Components/EventComponent';
import StateComponent from './Components/StateComponent';
import { FunctionalComponent } from './Components/FuntionalComponent';
import HooksComponent from './Components/HooksComponent';
import PhoneNumber from './Components/PhoneNumber';
import  Input  from './Components/Forms/Input';
import Keyboard from './Components/Calculator/keyboard';

function App() {
  return (
    <div className="App">
     {/* <MyFristComponent></MyFristComponent>
     <p>Second Component use  - Props</p>
     <PropsDisplayer myProp="Hello" name="Geovanny Mero"></PropsDisplayer>
     <p>Events</p>
     <EventComponent></EventComponent>
     <p>State</p>
     <StateComponent></StateComponent>
     <p>Funtion Component</p>
     <FunctionalComponent name="Geo"></FunctionalComponent>
     <p>Hooks</p>
     <HooksComponent></HooksComponent> */}
     {/* <PhoneNumber></PhoneNumber> */}
     {/* <p>Forms</p>
     <Input></Input> */}
     <Keyboard></Keyboard>
    </div>
  );
}

export default App;
