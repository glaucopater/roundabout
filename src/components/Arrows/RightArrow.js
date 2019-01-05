import React from 'react'; 
import './Arrow.css'; 

const RightArrow = (props) => {
    const { handleOnClick } = props;
    const direction = "next";
    const disabled = props.currentOffset === "end" ? " disabled" : "";
    const onClick = props => { 
        handleOnClick(direction);
    }
    return (
        <div className={"arrow " + direction + disabled} onClick={onClick}> {direction} </div> 
    );
}

export default RightArrow;