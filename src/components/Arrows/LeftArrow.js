import React from 'react'; 
import './Arrow.css'; 

const LeftArrow = (props) => { 
    const { handleOnClick } = props;
    const direction = "prev";
    const disabled = props.currentOffset === "begin" ? " disabled" : "";
    const onClick = props => {  
        handleOnClick(direction);
    }
    return (
        <div className={"arrow " + direction + disabled} onClick={onClick}> {direction} </div> 
    );
}

export default LeftArrow;