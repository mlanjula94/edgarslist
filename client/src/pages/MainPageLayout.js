import React, { Component } from 'react';
import Carousel from "../components/Carousel"
import SidenavVertical from "./SidenavVertical"
import { Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import ProductTable from "../components/ProductTable"
import ProductCarousel from "../components/ProductCarousel"
import "./ProductPage.css"
import Sidenav from './Sidenav'

const MainPageLayout = () =>
  <div>
  <Row>
    <Col xs="2">
      <SidenavVertical />
    </Col>
    <Col className="spacer" xs="1">
    </Col>
    <Col className="sideNav" xs="9">
      <Sidenav />
    </Col>
  </Row>
  
 </div>
      
export default MainPageLayout;



