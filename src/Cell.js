import React from 'react';
import  './Board.css';

const Cell = ({cellID,cellValue}) => {
    return (
        <div>
            <h2>{cellID}</h2>
            <p>{cellValue}</p>
        </div>
    );
};

export default Cell;
