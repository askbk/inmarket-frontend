import React from 'react';
import './EmployeeHeader.css';

const employeeHeader = (props) => (
  <div className="employeeHeaderContainer">
  <div className="employeeLeftRow"><span className="employeePic"><img src={props.pic} /></span></div>
  <div className="employeeRightRow">
  <span className="employeeName">
  {props.name}
  </span>
  <span className="employeePosition"> 
  {props.position}
  </span>
  </div>
  </div>
);

export default employeeHeader;