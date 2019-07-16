import React from 'react';
import Cell from './Cell';
import  './Board.css';

const board = ({values, choice, onCellClick}) => {
    return (
        <div  className="flex-container">{
            values.map(({cellID, cellValue}) => {
            return (
                <Cell
                    key={cellID}
                    cellID={cellID}
                    cellValue = {cellValue}
                    choice={choice}
                    onCellClick={onCellClick}
                />
            )
        })

        }
        </div>
    );
};

export default board;
