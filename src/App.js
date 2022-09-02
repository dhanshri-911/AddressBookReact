import logo from './logo.svg';
import './App.css';
import {BrowserRouter,useRouteMatch,
  Routes,Route, Switch} from "react-router-dom";
  import AddressBookForm from '../src/component/AddressBookform/AddressBookForm' 
import AddressBookHome from '../src/component/AddressBookHome/AddressBookHome'
import Register from '../src/component/register/register';
import Login from '../src/component/login/login';
import { useState } from 'react';

function App() {
  // const [token,setToken] =useState();
  // if(!token){
  //   return<Login setToken={setToken}/>
  // }
  return (
   
   
    <div>
    {/* <BrowserRouter>
    <Switch>
    <Route path='/' element={<Home/>} />
    <Route exact path='/payroll-form' element={<Payrollform/>} />
      <Route exact path='/add-update/:id' element={<Payrollform/>} /> 
    </Switch>
    </BrowserRouter> */}
     
    
    <Routes>
    <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />    
      <Route path='/' element={<AddressBookHome/>} />
      <Route exact path='/address-form' element={<AddressBookForm/>} />
      <Route exact path='/update-addressbook/:id' element={<AddressBookForm/>} />  
       </Routes>
    </div>
    
  );
}

export default App;