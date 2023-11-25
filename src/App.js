import { BrowserRouter } from 'react-router-dom';
import './App.css';

import RouteCompo from './Route/RouteCompo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteCompo />
      </BrowserRouter>
    </div>
  );
}

export default App;
