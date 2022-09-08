import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import'./Jobactivety.css';
import isEmpty from 'validator/lib/isEmpty';
import { breakdo } from '../../api/auth.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBInput,
  } from 'mdb-react-ui-kit';

const Shutdown = () => {
    // const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
      username: '',
      equipment: 'Entry Coil car-1',
      remark: '',
    //   successMsg: false,
    //   errorMsg: false,
    //   loading: false,
  });
  const {
      username,
      equipment,
      remark,
    //   successMsg,
    //   errorMsg,
  } = formData;
  
  const handleChange = (evt) => {
      console.log(evt);
      setFormData({
          ...formData,
          [evt.target.name]: evt.target.value,
        //  successMsg:'',
        //  errorMsg:''
      });
  };
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
  
      // client-side validation
      if (
          isEmpty(username) ||
          isEmpty(equipment) ||
          isEmpty(remark)
      ) {
          setFormData({
              ...formData,
            //   errorMsg: 'All fields are required',
          });
      } else if (isEmpty(username)) {
          setFormData({
              ...formData,
            //   errorMsg: 'Invalid name',
          });
      } 
     
      else {
          const {username,remark } = formData;
          const data = { username,equipment,remark };
  
        //   setFormData({ ...formData, loading: true });
  
          breakdo(data)
              .then((response) => {
                  console.log('Axios breakdo success: ', response);
                  setFormData({
                      username: '',
                      equipment: '',
                      remark: '',
                    //   loading: false,
                    //   successMsg: response.data.successMessage,
                  });
              })
              .catch((err) => {
                  console.log('Axios breakdo error: ', err);
                //   setFormData({ ...formData, loading: false,errorMsg:err.response.errorMessage});
              });
      }
  };
  const [staticModal, setStaticModal] = useState(false);
  
    const toggleShow = () => setStaticModal(!staticModal);
  return (
    <div className="fix">
      <MDBBtn onClick={toggleShow}>Shut Down</MDBBtn>
  
      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
      <MDBModalDialog>
          <MDBModalContent>
          <MDBModalHeader>
              <MDBModalTitle>Shut Down</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
              <form className='signup-form' onSubmit={handleSubmit} noValidate>
                  <div className='form-group input-group'>
                  <MDBInput
                     className="from-size"
                     label="username"
                     icon="user"
                     group
                     type="text"
                     validate
                     error="wrong"
                     success="right"
                     name='username'
                     value={username}
                     onChange={handleChange}
                  />
                  </div>
                  
                  
              
                  <div className='form-group input-group'>
                      
                      <select className="from-size" name='equipment'type='text' onChange={handleChange}>
                          <option >Select Month</option>
                          <option value="Jan">Jan</option>
                          <option value="Feb">Feb</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                      </select>
                  </div>
                  <div className='form-group input-group'>
                      
                      <select className="from-size" name='equipment'type='text' onChange={handleChange}>
                          <option >Select Job Details</option>
                          <option value="Cleaning, Tightening and Contactor Tips Cleaning">Cleaning, Tightening and Contactor Tips Cleaning</option>
                          <option value="Cleaning Section Dryer Motor foundation and cable termination tightening. MCP Panel cleaning, tightening and contactor tip cleaning">
                          Cleaning and Tightening</option>
                          <option value="Cleaning, Tightening and Contactor Tips Cleaning">Cleaning, Tightening and Contactor Tips Cleaning</option>
                          <option value="Cleaning and Tightening and PLC Battery Status Inspection and rectification">Cleaning and Tightening and PLC Battery Status Inspection and rectification</option>
                      </select>
                  </div>
                  <div className='form-group input-group'>
                      
                      <select className="from-size" name='equipment'type='text' onChange={handleChange}>
                          <option >Select Job Area</option>
                          <option value="Cleaning Section Dryer MCP">Cleaning Section Dryer MCP</option>
                          <option value="Entry Section Drives from H1 to H18">Entry Section Drives from H1 to H18</option>
                          <option value="1. Entry PLC,2. Welder PLC,3. Furnace PLC">1. Entry PLC,2. Welder PLC,3. Furnace PLC</option>
                          <option value="1. RIO Entry,2. RIO Entry Looper">1. RIO Entry,2. RIO Entry Looper</option>
                      </select>
                  </div>
                      {/*userid */}
                  <div className='form-group input-group'>
                      <MDBInput
                        className='form-control'
                        name='remark'
                        value={remark}
                        type="textarea"
                        rows="2"
                        label="Remark"
                        placeholder='Remark'
                        icon="pencil-alt"
                        onChange={handleChange}
                      />  
                  </div>
                  
              
                  {/* signup button */}
                  <div className='form-group'>
                      <button type='submit' className='btn btn-primary btn-block'>
                          submit
                      </button>
                  </div>
                  {/* <div className="text-center">
                      <MDBBtn outline type='submit' color="secondary">
                         submit
                      </MDBBtn>
                  </div> */}
                  
              </form>
          </MDBModalBody>
          
          </MDBModalContent>
      </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Shutdown