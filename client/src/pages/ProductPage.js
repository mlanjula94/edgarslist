import React, { Component } from 'react';
import Carousel from "../components/Carousel"
import Sidenav from "../../src/pages/Sidenav"
import SidenavVertical from "..//pages/SidenavVertical"
import { Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import ProductTable from "../components/ProductTable"
import ProductCarousel from "../components/ProductCarousel"
import "./ProductPage.css"




const ProductPage = () =>
 
    <Col className="sideNav" xs="9">
      <ProductCarousel />
      <ProductTable />
    </Col>

      
export default ProductPage;



