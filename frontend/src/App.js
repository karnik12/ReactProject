// import logo from './logo.svg';
// import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import Contact from '../src/Components/Contact/Contact'
import Logout from './Pages/Logout';
import AdminUsers from './Pages/AdminUsers'
import AdminMessages from './Pages/AdminMessages'
import UpdateUser from '../src/Pages/UpdateUser'
import Employee from './Components/Employee/Employee';
import Hero from './Components/Hero/Hero';
import Sidebar from './Components/Layout/Sidebar';




const App=()=>{
  return (
    <>
    <Routes>
      <Route path='/' element={<Employee/>}/>
      <Route path="/Hero/:id" element={<Hero/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/logout' element={<Logout/>}/>  
      <Route path='/admin' element={<Sidebar/>}>
        <Route path='users' element={<AdminUsers/>}/>
        <Route path='updateuser/:id' element={<UpdateUser/>}/>
      </Route>
         
    </Routes>
      
    </>
  )
}

export default App;
