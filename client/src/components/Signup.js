
import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty';
// import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../components/helpers/message'
import { showLoading } from '../components/helpers/loading'
import './App.css';
import { signup } from '../api/auth';
import { isAuthentication } from './helpers/auth';
import '../components/App.css'

const Signup = () => {
    let navigate = useNavigate();
    useEffect(() => {
        // if (isAuthentication() && isAuthentication().role === 1) {
        //     console.log('Redireact to admin dashboard');
         
        //     navigate('/admin/dashboard');
        // }
        // else 
        if (isAuthentication() && isAuthentication().role === "0") {
            console.log('Redireact to user dashboard');
            navigate('/user/dashboard');
        }
        // eslint-disable-next-line
    }, [])
    const [formData, setFormData] = useState({
        username:"",
        userid:'',
        password:'',
        password2: '',
        role:'0',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });
    const {
        username,
        userid,
        password,
        password2,
        role,
        successMsg,
        errorMsg,
        loading,
    } = formData;
    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleChange = (evt) => {
        console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
			successMsg:'',
			errorMsg:''
        });
    };

	const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (
            isEmpty(username) ||
            isEmpty(userid) ||
            isEmpty(password) ||
            isEmpty(password2) ||
            isEmpty(role)
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
        } 
        else if (!equals(password, password2)) {
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match',
            });
        } 
        else {
            const { username,userid, password,role } = formData;
            const data = { username,userid, password,role };

            setFormData({ ...formData, loading: true });

            signup(data)
                .then((response) => {
                    console.log('Axios signup success: ', response);
                    setFormData({
                        username: '',
                        userid: '',
                        password: '',
                        password2: '',
                        role:'',
                        loading: false,
                        successMsg: response.data.successMessage,
                    });
                })
                .catch((err) => {
                    console.log('Axios signup error: ', err);
                    setFormData({ ...formData, loading: false,errorMsg:err.response.errorMessage});
                });
        }
    };


    /****************************
     * VIEWS
     ***************************/
    const showSignupForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
          
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
          
            {/* username */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input
                    name='username'
                    value={username}
                    className='form-control'
                    placeholder='Username'
                    type='text'
                    onChange={handleChange}
                />
            </div>
            {/*userid */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input
                    name='userid'
                    value={userid}
                    className='form-control'
                    placeholder='UserId'
                    type='text'
                    onChange={handleChange}
                />
            </div>
            {/* password */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            {/* password2 */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    name='password2'
                    value={password2}
                    className='form-control'
                    placeholder='Confirm password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <select className="form-control form-control-lg" name='role'type='text' onChange={handleChange}>
                       <option value={"0"}>user</option>
                       <option value={"1"}>executive</option>
                       <option value={"2"}>senior executive</option>
                </select>
            </div>
                
        
            {/* signup button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Signup
                </button>
            </div>
            {/* already have account */}
            <p className='text-center text-white'>
                Have an account? <Link to='/signin'>Log In</Link>
            </p>
        </form>
    );

    /****************************
     * RENDERER
     ***************************/
    return (
        <div className='signup-container'>
            <div className=''>
                <div className='col-md-5 mx-auto align-self-center'>
				    {successMsg && <div  className='text-center'>{showSuccessMsg(successMsg)}</div>}
                    {errorMsg && <div  className='text-center'>{showErrorMsg(errorMsg)}</div>}
					{loading && <div  className='text-center'>{showLoading()}</div>}
					{/* {loading && (
                        <div className='text-center pb-4'>{showLoading()}</div>
                    )} */}
                    {showSignupForm()}
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;