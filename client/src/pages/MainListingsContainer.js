import React, { Component } from "react";
import MainPage from './MainPageLayout'
import ProductPage from './ProductPage'
import MyAccount from './MyAccount'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import SidenavVertical from './SidenavVertical'
import Sidenav from './Sidenav'
import Account from './MyAccount/MyAccountContainer'
import './Sidenav/Sidenav.css'

class PortfolioContainer extends Component {
  state = {
    currentPage: "Products"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
        case "Products":
        return <ProductPage />;
        case "Account": 
        return <Account />;
        case "Account": 
        return <Account />;
        default:
        return (<ProductPage />)
    }
  }

  render() {
    return (
      <div >
      <Row>
        <Col xs="2">
          <SidenavVertical />
        </Col>
        <Col className="spacer" xs="1">
        </Col>
        <Col className="sideNav" xs="9">
          <Sidenav currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange} />
        
          {this.renderPage()}
        </Col>
        
      </Row>
      
        
      </div>
    );
  }
}

export default PortfolioContainer;
