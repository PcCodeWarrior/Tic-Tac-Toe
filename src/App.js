import React, {Component} from 'react';
import Board from './Board';
import './App.css';

import {values} from './startingValues';


class App extends Component {

    state = {currentValues: [], choice:''};

    componentDidMount(){
        this.setState({currentValues: values})
    }

    onCellClick = (e) => {
        console.log(e.cellID + '   ' + e.cellValue);
        let cellValue = e.cellValue===''||e.cellValue==='Y'?'X':'Y';
        this.setState({currentValues: this.state.currentValues.map(val=>(val.cellID===e.cellID? {...val, cellValue:cellValue}:val))});

        this.setState( {choice: cellValue})
    };

    startOver = () =>{
        this.setState({currentValues: values, choice:'' })
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
