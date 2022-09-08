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

const Breakdown = () => {
    

    const [formData, setFormData] = useState({
      username: '',
      equipment: '',
      remark: '',
    
  });
  const {
      username,
      equipment,
      remark,
  } = formData;
  
  const handleChange = (evt) => {
      console.log(evt);
      setFormData({
          ...formData,
          [evt.target.name]: evt.target.value,
        
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
           
          });
      } else if (isEmpty(username)) {
          setFormData({
              ...formData,
           
          });
      } 
     
      else {
          const {username,remark } = formData;
          const data = { username,equipment,remark };
  
       
  
          breakdo(data)
              .then((response) => {
                  console.log('Axios breakdo success: ', response);
                  setFormData({
                      username: '',
                      equipment: '',
                      remark: '',
                    
                  });
              })
              .catch((err) => {
                  console.log('Axios breakdo error: ', err);
                
              });
      }
  };
  const [staticModal, setStaticModal] = useState(false);
  
    const toggleShow = () => setStaticModal(!staticModal);
  return (
    <div className="fix">
      <MDBBtn onClick={toggleShow}>Break Down</MDBBtn>
  
      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
      <MDBModalDialog>
          <MDBModalContent>
          <MDBModalHeader>
              <MDBModalTitle>Break Down</MDBModalTitle>
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
                            <option >Select Equipment Name</option>
                            <option value="Entry Coil car-1">Entry Coil car-1</option>
                            <option value="Entry Coil car-2">Entry Coil car-2</option>
                            <option value="POR-1">POR-1</option>
                            <option value="POR-2">POR-2</option>
                            <option value="Entry Looper">Entry Looper</option>
                            <option value="HADT circulation tank">HADT circulation tank</option>
                            <option value="CRT circulation tank">CRT circulation tank</option>
                            <option value="ECT circulation tank">ECT circulation tank</option>
                            <option value="HADT wringer Rolls & Brush Rolls">HADT wringer Rolls & Brush Rolls</option>
                            <option value="ECT wringer Rolls & Brush rolls">ECT wringer Rolls & Brush rolls</option>
                            <option value="CRT wringer Rolls & Brush rolls">CRT wringer Rolls & Brush rolls</option>
                            <option value="Furnace Seal Rolls">Furnace Seal Rolls</option>
                            <option value="Furnace-DFF1,2,3 Blower">Furnace-DFF1,2,3 Blower</option>
                            <option value="Furnace DFF Exhauster">Furnace DFF Exhauster</option>
                            <option value="Furnace DFF GTC-1,2,3,4">Furnace DFF GTC-1,2,3,4</option>
                            <option value="Furnace RTH GTC-1,2">Furnace RTH GTC-1,2</option>
                            <option value="Furnace RJC Blower1">Furnace RJC Blower1</option>
                            <option value="Furnace RJC Blower2">Furnace RJC Blower2</option>
                            <option value="Furnace RJC Blower3">Furnace RJC Blower3</option>
                            <option value="Furnace-BCUs-1-46">Furnace-BCUs-1-46</option>
                            <option value="Furnace-valves">Furnace-valves</option>
                            <option value="Zinc pot & VIP panels">Zinc pot & VIP panels</option>
                            <option value="Chromate section drives">Chromate section drives</option>
                            <option value="chromate section rolls">chromate section rolls</option>
                            <option value="chromate section circulation pumps">chromate section circulation pumps</option>
                            <option value="Tension Leveller">Tension Leveller</option>
                            <option value="Exit Looper">Exit Looper</option>
                            <option value="Exit Shear">Exit Shear</option>
                            <option value="T.R-1">T.R-1</option>
                            <option value="T.R-2">T.R-2</option>
                            <option value="Exit coil car-1">Exit coil car-1</option>
                            <option value="Exit coilcar-2">Exit coilcar-2</option>
                            <option value="Bridle-1">Bridle-1</option>
                            <option value="Bridle-2">Bridle-2</option>
                            <option value="Bridle-3">Bridle-3</option>
                            <option value="Bridle-4">Bridle-4</option>
                            <option value="Bridle-5">Bridle-5</option>
                            <option value="Bridle-6">Bridle-6</option>
                            <option value="Bridle-7">Bridle-7</option>
                            <option value="Bridle-8">Bridle-8</option>
                            <option value="Bridle-9">Bridle-9</option>
                            <option value="Steering unit-1">Steering unit-1</option>
                            <option value="Steering unit-2">Steering unit-2</option>
                            <option value="Steering unit-3">Steering unit-3</option>
                            <option value="Steering unit-4">Steering unit-4</option>
                            <option value="Steering unit-5">Steering unit-5</option>
                            <option value="Steering unit-6">Steering unit-6</option>
                      </select>
                  </div>
                      {/*userid */}
                  <div className='form-group input-group mgroup'>
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
                  
                  
              </form>
          </MDBModalBody>
          
          </MDBModalContent>
      </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Breakdown