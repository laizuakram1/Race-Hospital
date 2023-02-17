
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element = {<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
