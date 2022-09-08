import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Notfound from './Notfound';
import Signin from './Signin';
import Signup from './Signup';
import '../components/App.css'
import Userdashboard from './Userdashboard';
import Admindashboard from './Admindashboard';
import Seniordashboard from './Seniordashboard';
import Spares from './Spares.js';
import Drawing from './Drawing.js';
import Jobactivety from './user/Jobactivety';
import Preshiftrepot from './user/Preshiftrepot';
import Shooting from './Shooting';
import Eavhistory from './Eavhistory';
import Alert from './senior/Alert';
import BypassList from './senior/BypassList';
import Report from './senior/Report';
import './App.css'

const App = ()=> {
  return (
   <BrowserRouter>
      <Header/>
      {/* <main> */}
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/signup' element={<Signup />}/>
           <Route exact path='/signin' element={<Signin />}/>
           <Route exact path='/admin/dashboard' element={<Admindashboard />}/>
           <Route exact path='/user/dashboard' element={<Userdashboard />}/>
           <Route exact path='/senior/dashboard' element={<Seniordashboard/>}/> 
           <Route exact path='/spares' element={<Spares/>}/> 
           <Route exact path='/drawing' element={<Drawing/>}/> 
           <Route exact path='/jobactivety' element={<Jobactivety/>}/> 
           <Route exact path='/preshiftrepot' element={<Preshiftrepot/>}/>
           <Route exact path='/shooting' element={<Shooting/>}/>
           <Route exact path='/eavhistory' element={<Eavhistory/>}/>


           <Route exact path='/alert' element={<Alert/>}/>
           <Route exact path='/bypasslist' element={<BypassList/>}/>
           <Route exact path='/report' element={<Report/>}/>
           <Route  element={<Notfound />}/>
        </Routes>
      {/* </main> */}
   </BrowserRouter>
  )
}

export default App;
