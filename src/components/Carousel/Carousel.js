import React, { Component } from 'react'; 
import './Carousel.css'; 
import Item from '../Item/Item';

class Carousel extends Component {
  render() {
    const items = this.props.items.map( (item,index) => {  
        const active = this.props.activeItems.includes(index);
        return <Item key={index} index={index} active={active} /> 
    } );
    return (
      <div className="carousel">
       {items}
      </div>
    );
  }
}

export default Carousel;
