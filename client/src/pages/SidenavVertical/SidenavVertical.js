
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {Nav} from 'reactstrap';
import './SidenavVertical.css'
import ReactSVG from 'react-svg'
import * as FontAwesome from 'react-icons/lib/fa'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class FooterPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
    render(){
        return(
					
			

				<Row>
				<div className="sidebarVertical">
				<div className="sidebarVertical-nav">
					<Col xs="auto">
            <li><div>
                <a id="navbarVertical-toggle">Home<ReactSVG className="house" path="house.svg" />  </a>
                </div>
                
						</li>
					</Col>
					<Col xs="auto">
            <li>
                <a href="#">Electronics <ReactSVG className="laptop" path="laptop3.svg" /></a>
						</li>
					</Col>
					<Col xs="auto">
            <li>
                <a href="#">Tools<ReactSVG className="hammer" path="hammer.svg" /></a>
						</li>
					</Col>
					<Col xs="auto">
            <li>
                <a href="#">Furniture<ReactSVG className="couch" path="couch2.svg" /></a>
						</li>
					</Col>
					<Col xs="auto">
            <li>
                <a href="#">Cars+Trucks<ReactSVG className="car" path="car4.svg" />
                    </a>
                    
						</li>
          </Col>
          <Col xs="auto">
            <li>
                <a href="#">More <ReactSVG className="more" path="more.svg" />
                    </a>
                    
						</li>
          </Col>

          
          
         

        </div>
        </div>
        
        </Row>

        )
}
}

export default FooterPage;