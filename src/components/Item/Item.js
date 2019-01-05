import React from 'react'; 
import './Item.css'; 

const Item = (props) => {  
    const active = props.active ? " active" : "";
    const classNames = "item" + active ; 
    return (
    <div className={classNames}> 
        <img alt={props.index} src={"http://lorempixel.com/200/180/abstract/" + props.index}/>
        <div className="caption">Image {props.index} title</div>
    </div>);
}

export default Item;