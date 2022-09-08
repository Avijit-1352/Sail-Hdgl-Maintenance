import React, { Fragment } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {isAuthentication,logout} from './helpers/auth';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
// import MenuIcon from '@mui/icons-material/Menu';
import logo from './sail.png';
 const Header = () => {
  const navigate = useNavigate();
  const handleLogout = evt => {
		logout(() => {
			navigate('/signin');
		});
	};
    const showNavigation = () => (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} width="45"  className="d-inline-block align-middle mr-2" alt="can't load" />
            <Link className="navbar-brand" to='/'>SAIL</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">==</span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {!isAuthentication() && (
                <Fragment>
                  <li className="nav-item ">
                     <Link className="nav-link" to='/'>Home</Link>
                 </li>
                 {/* <li className="nav-item ">
                   <Link className="nav-link" to='/signup'>Signup</Link>
                 </li> */}
                 <li className="nav-item">
                    <Link className="nav-link" to='/signin'>Signin</Link>
                 </li>
                </Fragment>
              )}
              {isAuthentication() && isAuthentication().role === "0" && (
                <Fragment>
                  {/* <li className="nav-item ">
                     <Link className="nav-link" to='/user/dashboard'>Dashboard</Link>
                 </li> */}
                 <li className="nav-item ">
                     <Link className="nav-link" to='/'>Home</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/spares'>Spares</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/drawing'>Drawing</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/jobactivety'>Jobactivity</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/preshiftrepot'>PreShiftReport</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/eavhistory'>Equhistory</Link>
                 </li>
                </Fragment>
              )}
             {isAuthentication() && isAuthentication().role === "1" && (
                <Fragment>
                  <li className="nav-item ">
                     <Link className="nav-link" to='/admin/dashboard'>Dashboard</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/spares'>Spares</Link>
                 </li>

                 <li className="nav-item draw">
                   <Link className="nav-link" to='/drawing'>Drawing</Link>
                   
                </li> 
                 <li className="nav-item ">
                   <Link className="nav-link" to='/jobactivety'>Jobactivity</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/preshiftrepot'>PreShiftReport</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/eavhistory'>Equhistory</Link>
                 </li>
                </Fragment>
              )}
              {isAuthentication() && isAuthentication().role === "2" && (
                <Fragment>
                  <li className="nav-item ">
                     <Link className="nav-link" to='/senior/dashboard'>Dashboard</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/signup'>AddRegister</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/spares'>Spares</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/drawing'>Drawing</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/preshiftrepot'>PreShiftReport</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/eavhistory'>Equhistory</Link>
                 </li>
                 <li className="nav-item ">
                   <Link className="nav-link" to='/alert'>Alert</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/report'>Report</Link>
                 </li>
                 <li className="nav-item ">
                 <Link className="nav-link" to='/bypasslist'>BypassList</Link>
                 </li>
                </Fragment>
              )}
              {isAuthentication() && (
                <Fragment>
                  <li className="nav-item ">
                  <button
									className='nav-link botu'
									onClick={handleLogout}
								>
									{/* <i className='fas fa-sign-out-alt'></i> */}
									Logouts
								</button>
                 </li>
                 
                </Fragment>
              )}
            </ul>
            
            </div>
      </nav>
    );

    return <header id='header'>{showNavigation()}</header>;
    
}

export default Header;
/*
{isDash ? <Nav1> : <Nav2>}







*/ 