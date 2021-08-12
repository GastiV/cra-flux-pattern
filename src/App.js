import './App.css';
import {Store} from "./State/Store";
import Fruits from "./Fruits";

function App() {
  return (
    <div className="App">
        <Store>
            <h3>Flux pattern con Reducer + Context</h3>
            <Fruits/>
        </Store>
    </div>
  );
}

export default App;
