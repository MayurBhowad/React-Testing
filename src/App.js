import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';

function App() {
  console.log('Running...');
  return (
    <div className="App">
      <header className="App-header">
        <Button lable="Click me please"></Button>
      </header>
      <a href="">Learn Reactss</a>
    </div>
  );
}

export default App;
