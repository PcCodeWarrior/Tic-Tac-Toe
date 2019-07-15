import React from 'react';
import Cell from './Cell';
import  './Board.css';

const board = ({values}) => {
    return (
        <div  className="flex-container">{
            values.map(({cellID, cellValue}) => {
            return (
                <Cell
                    cellID={cellID}
                    cellValue = {cellValue}
                />
            )
        })

        }
        </div>
    );
};

export default board;
