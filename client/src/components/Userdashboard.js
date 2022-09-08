import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
const Userdashboard = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary">AddRegister</button>
      <button type="button" className="btn btn-secondary">Spares</button>
      <button type="button" className="btn btn-success">Drawing</button>
      <button type="button" className="btn btn-danger">PreShiftReport
      </button>
      <button type="button" className="btn btn-warning">Equhistory</button>
      <button type="button" className="btn btn-info">Alert</button>

      <button type="button" className="btn btn-dark">Report</button>
      <button type="button" className="btn btn-success">BypassList</button>

    </div>
  )
}

export default Userdashboard