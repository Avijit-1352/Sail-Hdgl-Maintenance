import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import {Link} from 'react-router-dom'
const Seniordashboard = () => {
  return (
    <div className="bcenter">
      <br/>
      <br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <center>
      <button  type="button" className=" space btn btn-primary"> <Link className="linkcolor" to='/signup'>AddRegister</Link></button>
      <button type="button" className=" space btn btn-secondary"><Link className="linkcolor" to='/spares'>Spares</Link></button>
                   
      <button type="button" className=" space btn btn-success"><Link className="linkcolor" to='/drawing'>Drawing</Link></button>
      <button type="button" className=" space btn btn-danger"><Link className="linkcolor" to='/preshiftrepot'>PreShiftReport</Link>
      </button>
      <button type="button" className=" space btn btn-warning"><Link className="linkcolor" to='/eavhistory'>Equhistory</Link></button>
      <button type="button" className=" space btn btn-info"><Link className="linkcolor" to='/alert'>Alert</Link></button>

      <button type="button" className=" space btn btn-dark"><Link className="linkcolor" to='/report'>Report</Link></button>
      <button type="button" className=" space btn btn-success"><Link className="linkcolor" to='/bypasslist'>BypassList</Link></button>
      </center>
    </div>
  )
}

export default Seniordashboard