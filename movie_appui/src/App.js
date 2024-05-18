
// import LoginPage from './pages/LoginPage';
import PaymentManagment from './pages/PaymentManagment';
import UserManagment from './pages/UserManagment';
import OrderTracking from './pages/OrderTracking';
import StaffManagment from './pages/StaffManagment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/shared/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/paymet_managment' element={<PaymentManagment/>}/>
        <Route path='/user_managment' element={<UserManagment/>}/>
        <Route path='/order_tracking' element={<OrderTracking/>}/>
        <Route path='/staff_managment' element={<StaffManagment/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
