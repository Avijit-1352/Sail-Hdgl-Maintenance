import React from 'react'
import Datatable from './Datatable/index.js';
const Spares = () => {
  return (
  <div className="App my-2">
    <center>
      <h4>Spares Table <a href="https://docs.google.com/spreadsheets/d/1z4_xV264srvB_arHbLL7KQS1MTfHGhxOyiHxhK3-i3Q/edit?usp=sharing" rel="noopener noreferrer" target="_blank">(Click)</a></h4>
     
    </center>
     {/* <p href="https://docs.google.com/spreadsheets/d/1GsMZcBvl6uL4hJqMkPqHHQ8f_hGrbFHor-7D4V0AMwA/edit#gid=0">click this link </p> */}
      <Datatable/>
  </div>
  )
}

export default Spares