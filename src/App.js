import React, {Component} from 'react';
import Board from './Board';
import './App.css';

import {values} from './startingValues';


class App extends Component {

    state = {currentValues: []};

    componentDidMount(){
        this.setState({currentValues: values})
    }

    onCellClick = (e) => {
        console.log(e.cellID + '   ' + e.cellValue);
        this.setState({currentValues: this.state.currentValues.map(val=>(val.cellID===e.cellID? {...val, cellValue:'X'}:val))})
    };

    startOver = () =>{
        this.setState({currentValues: values})
    };


    render() {
        const {currentValues} = this.state;
        return <div>
            <Board values={currentValues} onCellClick={this.onCellClick}/>
            <button onClick={this.startOver}>Reset</button>
        </div>;
    };
}

export default App;
