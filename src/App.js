import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import { useState } from 'react';

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const fetching = async () => {
    setButtonClicked(true);
  }

  const buttonText = buttonClicked ? 'Ok' : 'fetch';
  return (
    <div className="App">
      <header className="App-header">
        <Button lable="Click me please"></Button>
      </header>
      <a href="">React Testing</a>
      <button className="btn btn-success" onClick={fetching} disabled={buttonClicked}>{buttonText}</button>
    </div>
  );
}

export default App;
