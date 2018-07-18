import React from 'react';
import "../components/Cards/Cards.css";
import Button from "../components/Button"
import Card from "../components/Card"
import CardBody from "../components/CardBody"
import CardHeader from "../components/CardHeader"
import Title from "../components/Title"
import "./showcase.css"

//Temporarily store data here
const PostsData = [
  {
    "category": "Dirt Bike",
    "title": "APOLLO 250cc 4-SPEED Dirt Bike",
    "text": "$99.99 per day",
    "image": "https://images.pexels.com/photos/57390/dirt-bike-motocross-motorcycle-motorbike-57390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
  },
  {
    "category": "Surfboard",
    "title": "Odysea Hard and Soft Boards",
    "text": "$49.99 per day",
    "image": "https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120"
  },
  {
    "category": "Pioneer DJ",
    "title": "Pioneer DJ Pro mixing board ",
    "text": "$79 per day",
    "image": "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120"
  },
  {
    "category": "Bicyle",
    "title": "Bulls 8-speed Mountain Bike",
    "text": "$39.99 per day",
    "image": "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=115"
  },
  {
    "category": "Tent",
    "title": "Heavy Duty 16 Person Camping Tent",
    "text": "$250 per week",
    "image": "https://images.pexels.com/photos/735837/pexels-photo-735837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120"
  },
  {
    "category": "Lights",
    "title": "Professional Photography Lights",
    "text": "$199 per week",
    "image": "https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
  }
]


// Start App

class Main extends React.Component { 
  constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }
 

  render() {
    return <div>
      <header className="app-header"></header>
      <Title />
      <div className="app-card-list" id="app-card-list">
        {
          Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
    </div>
  }
}

export default Main;