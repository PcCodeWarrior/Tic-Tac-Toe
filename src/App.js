import React, {Component} from 'react';
import Board from './Board';
import './App.css';
import {isWinner, isGameOver} from './helpers/gameLogic';

import {values} from './startingValues';


class App extends Component {

    state = {currentValues: [], choice: '', theWinnerIs:''};

    componentDidMount() {
        this.setState({currentValues: values})
    }

    onCellClick = (e) => {
        let cellValue = this.nextUser(e.cellValue);
        let currentCell =e.cellID;
        if(this.state.theWinnerIs.length===0){
            this.setState({
                currentValues: this.state.currentValues.map(val => (val.cellID === e.cellID ? {...val, cellValue: cellValue} : val))
            }, ()=>isWinner(this.state.currentValues,currentCell)? this.setState({theWinnerIs: cellValue+' is the Winner'}):null);
        }
    };

    startOver = () => {
        this.setState({currentValues: values, choice: '', theWinnerIs:''})
    };

    nextUser = (cellValue) => {
        if (cellValue.length === 0) //this cell has not been clicked in
        {
            let newChoice = this.state.choice === 'X' ? 'Y' : 'X';
            this.setState({choice: newChoice});
            return (newChoice);
        } else
            return cellValue
    };


    render() {
        const {currentValues, choice,theWinnerIs} = this.state;
        return <div>
           <h2 style={{textAlign:'center'}}> {isGameOver(currentValues) && theWinnerIs.length===0?'The Game was a DRAW':theWinnerIs}</h2>
            <button onClick={this.startOver}>Reset</button>
            <Board values={currentValues} choice={choice} onCellClick={this.onCellClick}/>
        </div>;
    };
}

export default App;
