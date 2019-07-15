import React from 'react';
import  './Board.css';

const Cell = ({cellID,cellValue, onCellClick}) => {
    return (
        <div onClick={()=>onCellClick({cellID,cellValue})} >
            <h2>{cellID}</h2>
            <p>{cellValue}</p>
        </div>
    );
};

export default Cell;
