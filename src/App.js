import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionCounter } from './redux/actions/action'
import './App.css';
import soundFile from './assets/mp3Files/beep.mp3'

var snd = new Audio(soundFile);

function App() {

  const count = useSelector(state => state.counter);
  const dispatch = useDispatch()
  const decrementCounter = () => {
    if (count !== 0) {
      dispatch(actionCounter('DECREMENT'))
    } else {
      snd.play()
    }
  }

  return (
    <div className="App">
      <h1 >  {"😎"} Counter   {"😎"} </h1>
    
      <h2 className='App-logo'> {count}</h2>

      <button type='button' className='button-style' style={{ backgroundColor: 'green' }} onClick={() => dispatch(actionCounter('INCREMENT'))}>Increment</button>
      <br />
      <button type='button' className='button-style' style={{ backgroundColor: 'red' }} onClick={decrementCounter}>Decrement</button>
      <br />
      <button type='button' className='button-style' style={{ backgroundColor: 'GrayText' }} onClick={() => dispatch(actionCounter('RESET'))}>Reset</button>
    </div>
  );
}

export default App;
