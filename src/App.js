import React, {Component} from 'react';
import Board from './Board';
import './App.css';

import {values} from './startingValues';


class App extends Component {

    state = {currentValues: [], choice: ''};

    componentDidMount() {
        this.setState({currentValues: values})
    }

    onCellClick = (e) => {
        let cellValue = this.nextUser(e.cellValue);
        this.setState({
            currentValues: this.state.currentValues.map(val => (val.cellID === e.cellID ? {...val, cellValue: cellValue} : val))
        });
    };

    startOver = () => {
        this.setState({currentValues: values, choice: ''})
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
        const {currentValues, choice} = this.state;
        return <div>
            <Board values={currentValues} choice={choice} onCellClick={this.onCellClick}/>
            <button onClick={this.startOver}>Reset</button>
        </div>;
    };
}

export default App;
