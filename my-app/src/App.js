import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return ( 
    <div className="App">
      <div class="tabs is-large">
        <ul>
          <li><a>Map</a></li>
          <li><a>Alert</a></li>
          <li><a>Stories</a></li>
          <li><a>Help</a></li>
        </ul>
      </div>
      <div className="App-header">
        <div>You are not alone.</div>
        <div>Stop AAPI Hate!</div>
      </div>
      
    </div>
  );
}

export default App;
