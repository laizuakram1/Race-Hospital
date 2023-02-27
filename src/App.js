
import { Route,Routes } from 'react-router-dom';
import './App.css';
import 'react-day-picker/dist/style.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import { Toaster } from 'react-hot-toast';
// import router from './Routes/Routes/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Toaster 
      toastOptions={{
        className: '',
        style: {
          backgroundColor:'orange',
          padding: '16px',
          color: 'green',
        },
      }}
      />
      
    </div>
  );
}

export default App;
