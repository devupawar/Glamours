import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navrouter from './Navrouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Services from './Services';
import Appointment from './Appointment';
import Profile from './Profile';
import Register from './Register';

function App() {
  return (
    <div>
      <>
    <BrowserRouter>
    <Navrouter/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/appointment' element={<Appointment/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    </div>
  );
}

export default App;
