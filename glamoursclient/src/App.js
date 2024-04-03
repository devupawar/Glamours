import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navrouter from './Navrouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Appointment from './Appointment';
import Profile from './Profile';
import Login from './Login';
import Servicedetail from './Servicedetail';
import Footer from './Footer';

import Register from './Register';


function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Navrouter />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/service' element={<Services />}></Route>
            <Route path='/service/:servicetype' element={<Services />}></Route>
            <Route path='/appointment' element={<Appointment />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/servicedetail' element={<Servicedetail/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>

      </>
    </div>
  );
}

export default App;
