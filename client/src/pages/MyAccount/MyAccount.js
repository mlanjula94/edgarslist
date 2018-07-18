import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarToggler } from 'reactstrap';
import AccountInf from "./AccountInfo"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Account = props => (
  <div className="carousel slide" >
  <div className="carousel-wrapper">
		<h2>Account Info</h2>
		<ol className="carousel-indicators">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Info")} 
        className={ (props.currentPage === "Info") ? "nav-link active" : "nav-link"}>
        AccountInfo
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("AccountInfo")}
        className={ (props.currentPage === "AccountInfo") ? "nav-link active" : "nav-link"}>
        AccountInfo
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Blog")} 
        className={ (props.currentPage === "Blog") ? "nav-link active bg-danger" : "nav-link"}>
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Contact")} 
      className={ (props.currentPage === "Contact") ? "nav-link active" : "nav-link"}>
        Contact
      </a>
    </li>
		</ol>
</div>
</div>
	
);


export default Account;


