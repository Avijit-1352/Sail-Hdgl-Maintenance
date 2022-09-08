
import React from 'react';
// import 'antd/dist/antd.min.css';
import'./Jobactivety.css';
// import isEmpty from 'validator/lib/isEmpty';
// import { breakdo } from '../../api/auth.js';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBInput,
//   } from 'mdb-react-ui-kit';
import Breakdown from './Breakdown';
import Shutdown from './Shutdown';


const Jobactivety = () => {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     username: '',
//     equipment: 'Entry Coil car-1',
//     remark: '',
//     successMsg: false,
//     errorMsg: false,
//     loading: false,
// });
// const {
//     username,
//     equipment,
//     remark,
//     successMsg,
//     errorMsg,
// } = formData;

// const handleChange = (evt) => {
//     console.log(evt);
//     setFormData({
//         ...formData,
//         [evt.target.name]: evt.target.value,
//        successMsg:'',
//        errorMsg:''
//     });
// };

// const handleSubmit = (evt) => {
//     evt.preventDefault();

//     // client-side validation
//     if (
//         isEmpty(username) ||
//         isEmpty(equipment) ||
//         isEmpty(remark)
//     ) {
//         setFormData({
//             ...formData,
//             errorMsg: 'All fields are required',
//         });
//     } else if (isEmpty(username)) {
//         setFormData({
//             ...formData,
//             errorMsg: 'Invalid name',
//         });
//     } 
   
//     else {
//         const {username,remark } = formData;
//         const data = { username,equipment,remark };

//         setFormData({ ...formData, loading: true });

//         breakdo(data)
//             .then((response) => {
//                 console.log('Axios breakdo success: ', response);
//                 setFormData({
//                     username: '',
//                     equipment: '',
//                     remark: '',
//                     loading: false,
//                     successMsg: response.data.successMessage,
//                 });
//             })
//             .catch((err) => {
//                 console.log('Axios breakdo error: ', err);
//                 setFormData({ ...formData, loading: false,errorMsg:err.response.errorMessage});
//             });
//     }
// };
// const [staticModal, setStaticModal] = useState(false);

//   const toggleShow = () => setStaticModal(!staticModal);
return (
  <div className="flexo">
    <Shutdown/>
    <Breakdown />
  </div>
)
}

export default Jobactivety;
