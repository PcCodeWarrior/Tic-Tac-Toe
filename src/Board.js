import React from 'react';
import Cell from './Cell';
import  './Board.css';

const board = ({values, onCellClick}) => {
    return (
        <div  className="flex-container">{
            values.map(({cellID, cellValue}) => {
            return (
                <Cell
                    key={cellID}
                    cellID={cellID}
                    cellValue = {cellValue}
                    onCellClick={onCellClick}
                />
            )
        })

        }
        </div>
    );
};

export default board;
