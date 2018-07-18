
import React from 'react';
import { Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {Nav} from 'reactstrap';
import './Sidenav.css'
import ReactSVG from 'react-svg'
import AddProductModal from "../../components/Modal"
import Modal from "../../components/Modal"


const NavTabs = props => (

				<Row className="navRow">
				<div className="sidebar">

				<div className="sidebar-nav">
					<Col xs="auto">
            <li>
								<a className="postItem" id="navbar-toggle">Post an Item <Modal /></a>
								
						</li>
					</Col>
					<Col xs="auto">
            <li>
						<a onClick={() => props.handlePageChange("Products")}
						className={ (props.currentPage === "Products") ? "nav-link active" : "nav-link"}>
						MainPage</a>
						</li>
					</Col>
					<Col xs="auto">
            <li>
                <a onClick={() => props.handlePageChange("Account")}
        className={ (props.currentPage === "Account") ? "nav-link active" : "nav-link"}>
        My Account</a>
						</li>
					</Col>
					<Col xs="auto">
					<li>
					<a onClick={() => props.handlePageChange("test")}
					className={ (props.currentPage === "test") ? "nav-link active" : "nav-link"}>
					Map View</a>
					</li>
				</Col>
					<Col  xs="auto"> 		
						<div className="searchField">		
						<label htmlFor="exampleSearch">Search</label>
						<input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />			
					</div>
					</Col>
        </div>
				</div>
				</Row>
				

        );

export default NavTabs;