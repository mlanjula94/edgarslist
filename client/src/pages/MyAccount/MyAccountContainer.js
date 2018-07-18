import React, { Component } from "react";
import MyAccount from './MyAccount'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import Account from './MyAccount'
import AccountInfo from "./AccountInfo"
import './MyAccount.css'
import AccountPosts from "./AccountPosts"
class PortfolioContainer extends Component {
  state = {
    currentPage: "Info"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
        case "Info":
        return <AccountInfo />;
        case "Posts": 
        return <AccountPosts />;
        default:
        return (<AccountInfo />)
    }
  }

  render() {
    return (
 
<div>
    <MyAccount currentPage={this.state.currentPage}
    handlePageChange={this.handlePageChange} />
    <div className="carousel-inner" role="listbox">
    {this.renderPage()}
	</div>

  
   
    
</div>
    
    );
  }
}

export default PortfolioContainer;
