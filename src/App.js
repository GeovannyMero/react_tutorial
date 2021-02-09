import logo from './logo.svg';
import './App.css';
import MyFristComponent from './Components/MyFristComponent';
import PropsDisplayer from './Components/PropsDisplayer';
import EventComponent from './/Components/EventComponent';
import StateComponent from './Components/StateComponent';

function App() {
  return (
    <div className="App">
     <MyFristComponent></MyFristComponent>
     <p>Second Component use  - Props</p>
     <PropsDisplayer myProp="Hello" name="Geovanny Mero"></PropsDisplayer>
     <p>Events</p>
     <EventComponent></EventComponent>
     <p>State</p>
     <StateComponent></StateComponent>
    </div>
  );
}

export default App;
