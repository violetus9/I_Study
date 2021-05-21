import './App.css';
import Comp from './conponents/Comp';
import Hello from './conponents/Hello'
import Welcome from './conponents/Welcome';

function App() {

  return (
    <div className="App" style={{ backgroundColor: 'palevioletred' }}>

      <Hello />
      <Welcome />

      <Comp />
      <Comp />

    </div>
  );
}

export default App;
