import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty';
// import isEmpty from 'validator/lib/isEmpty';

import './App.css';
import { showErrorMsg} from '../components/helpers/message'
import { showLoading } from '../components/helpers/loading'
import { signin } from '../api/auth';
import { setAuthentication,isAuthentication } from './helpers/auth';
import '../components/allcss/signin.css'
const Signin = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (isAuthentication() && isAuthentication().role === "1") {
            console.log('Redireact to admin dashboard');
         
            navigate('/admin/dashboard');
        }
        else if (isAuthentication() && isAuthentication().role === "0") {
            console.log('Redireact to user dashboard');
            navigate('/user/dashboard');
        }
        // eslint-disable-next-line
    }, [])
    
  const [formData, setFormData] = useState({
       userid: 'user@hdgl',
        password: 'abc123',
		errorMsg: false,
		loading: false,
    // redirectToDashboard: false,
});
const {
   userid,
    password,
    errorMsg,
    loading,
    // redirectToDashboard
} = formData;

  /****************************
     * EVENT HANDLERS
     ***************************/
   const handleChange = (evt) => {
   
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
  errorMsg:''
    });
};

const handleSubmit = (evt) => {
    evt.preventDefault();

    // client-side validation
    if (
      isEmpty(userid) ||
      isEmpty(password) 
  ) {
      setFormData({
          ...formData,
          errorMsg: 'All fields are required',
      });
  } else if (isEmpty(userid)) {
      setFormData({
          ...formData,
          errorMsg: 'Invaliduserid',
      });
  } else {
      const {userid, password } = formData;
      const data = {userid, password };

      setFormData({ ...formData, loading: true });

      signin(data)
        .then(response =>{
            setAuthentication(response.data.token,response.data.user);
            // if (isAuthentication() && isAuthentication().dept === "HDGL") {
                
            
            if (isAuthentication() && isAuthentication().role === "1") {
                console.log('Redireact to admin dashboard');
             
                navigate('/admin/dashboard');
                navigate('/spares');
                navigate('/drawing');
                navigate('/jobactivety');
                navigate('/preshiftrepot');
                navigate('/eavhistory');
            }
            else if (isAuthentication() && isAuthentication().role === "2") {
                console.log('Redireact to admin dashboard');
             
                navigate('/senior/dashboard');
                navigate('/spares');
                navigate('/drawing');
                navigate('/eavhistory');
                navigate('/alert');
                navigate('/bypasslist');
                navigate('/report');
            }
            
            else {
                console.log('Redireact to user dashboard');
                navigate('/user/dashboard');
                navigate('/spares');
                navigate('/drawing');
                navigate('/jobactivety');
                navigate('/preshiftrepot');
                navigate('/eavhistory');
            }
        // }
        // else if (isAuthentication() && isAuthentication().role === "PLTCM") {   

        // }

        })
        .catch(err =>{
            console.log('signin api function error',err);
            
        })

         
  }
};
    /****************************
     * VIEWS
     ***************************/
    const showSigninForm = () => (
        <div className="container">
      <div className="wrapper">
        <div className="title"><span>Employee Login</span></div>
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
          <div className="row">
            <i className="fas fa-user"></i>
            <input
                    name='userid'
                    value={userid}
                    className='form-control'
                    placeholder='Userid address'
                    type='text'
                    onChange={handleChange}
                />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    onChange={handleChange}
                />
          </div>
       
          <div className="row buttoni">
            <input type="submit" value="Signin"/>
          </div>

          {/* <p className="signup-link">
            Don't have an account? <Link to='/signup'>Register here</Link>
          </p> */}
        </form>
      </div>
    </div>
    );

    /****************************
     * RENDERER
     ***************************/
    return (
        <div className='in-container'>
            <div className='row'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {errorMsg && <div  className='text-center'>{showErrorMsg(errorMsg)}</div>}
					{loading && <div  className='text-center'>{showLoading()}</div>}
                    {showSigninForm()}
                    
                </div>
            </div>
        </div>
    );
}

export default Signin