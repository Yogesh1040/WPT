import logo from './logo.svg';
import './App.css';
import './components/FunctionComp'
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import MethodEvenetComp from './components/MethodEventComp';
import StateComp from './components/StateComp';
import MyDetailsComp from './tasks/MyDetailsComp';
import MyFriendComp from './tasks/MyFriendComp';
import Count from './tasks/Count';
import CssComp from './components/cssComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <FunctionComp name="Yogesh" post="Home"></FunctionComp>

      <MethodEvenetComp></MethodEvenetComp>
      <hr></hr>
      <ClassComp name="Yogesh" post="Home"></ClassComp>
      <hr></hr>
      <StateComp></StateComp>
      <hr></hr>
      <MyDetailsComp fname="Yogesh" lname="Bhapkar" contact="1000" email="abc@ac.com" address="abc"></MyDetailsComp>
      <hr></hr>
      <MyFriendComp fname="Yash" lname="Mundhe" contact="2000" email="abc@BACCC.com" address="Pune"></MyFriendComp>
      <hr></hr>
      <Count></Count>
      <hr></hr>
      <CssComp></CssComp>


    </div>
  );
}

export default App;
