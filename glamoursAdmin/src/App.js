
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import AddService from './AddService';
import Services from './Services';
import Customers from './Customers';
import Appointment from './Appointment';

function App() {
  return (
    <div >
      <>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/addservice' element={<AddService />}></Route>
            <Route path='/services' element={<Services />} ></Route>
            <Route path='/customer' element={<Customers />}></Route>
            <Route path='/Appointment' element={<Appointment />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
