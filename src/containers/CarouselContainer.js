import React, { Component } from 'react';  
import Carousel from '../components/Carousel/Carousel'; 
import LeftArrow from '../components/Arrows/LeftArrow'; 
import RightArrow from '../components/Arrows/RightArrow'; 

import './CarouselContainer.css'; 

class CarouselContainer extends Component {

  constructor(){
    super();
    this.state = {
      items:[],
      activeItems: [0,1,2,3]
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    const items = [...Array(12).keys()];
    this.setState({items});
  }

  handleOnClick(wichArrow){
    if(wichArrow  === "prev" &&  Math.min(...this.state.activeItems) > 0){
      const newActiveItems = this.state.activeItems.map( (item) => { return item - 1; } );
      this.setState({activeItems: newActiveItems});
    } else if(wichArrow  === "next" && Math.max(...this.state.activeItems) < this.state.items.length){
      const newActiveItems = this.state.activeItems.map( (item) => { return item + 1; } );
      this.setState({activeItems: newActiveItems});
    }
  }

  render() {
    /*todo: BETTER*/
    //const currentOffset = Math.min(...this.state.activeItems) === 0 ? "begin" ?  Math.max(...this.state.activeItems) === this.state.items.length : "end" : "";
    
    let currentOffset = "";
    if ( Math.min(...this.state.activeItems) === 0 ){
      currentOffset = "begin"
    } else if (Math.max(...this.state.activeItems) === this.state.items.length){
      currentOffset = "end"
    } 

    return (
      <div className="carousel-container"> 
       <h1>Carousel Test</h1>
       <Carousel items={this.state.items} activeItems={this.state.activeItems} />
       <LeftArrow handleOnClick={this.handleOnClick} currentOffset={currentOffset} />
       <RightArrow handleOnClick={this.handleOnClick} currentOffset={currentOffset}/>
      </div>
    );
  }
}

export default CarouselContainer;
