import './App.css';
import {Header , FilterNews} from './components'

function App() {
  return (
    <div className="page">
    <div className="header">
    <Header/>
    </div>
    <div className="filterNews">
    <FilterNews/>
    </div>
    </div>
  );
}

export default App;
