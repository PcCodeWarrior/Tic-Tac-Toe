import React from 'react';
import  './Board.css';

const Cell = ({cellID,cellValue, onCellClick}) => {
    const classColor = cellValue==='X'? 'green' :cellValue==='Y'?'red':'';
    return (
        <div className={classColor}  onClick={()=>onCellClick({cellID,cellValue})} >
            <h1>{cellValue}</h1>
        </div>
    );
};

export default Cell;
