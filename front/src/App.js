import './App.css';
import Settings from './components/Settings';
import Previews from './components/Previews';
import ApiPath from './ApiPath.js';
import ApiGetReq from './scripts/ApiGetReq.js';

const runScript = () => {
  ApiGetReq(ApiPath.runScriptUrl)
    .then(res => res !== null ?
      alert(`Completed\n` +
        `All files have ${res.clipped} items\n` +
        `Result file has ${res.result} items (headers counted too!)\n` +
        `Items matched in these files: ${res.matched}`) :
      alert('Error'))
    .catch(console.log)
}

function App() {
  return (
    <div className="App">
      <button onClick={runScript}>Run script</button>

      <Settings />
      <Previews />
    </div>
  );
}

export default App;
