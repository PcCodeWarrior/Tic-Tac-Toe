import React, { Component } from 'react';
import Board from './Board';
import './App.css';

import {values} from './startingValues';



class App extends Component {

    state ={values};

    onCellClick = (e) =>{
        console.log(e.cellID+'   '+e.cellValue)
};

    render() {
        return <div>
         <Board values={values} onCellClick={this.onCellClick}/>
        </div>;
    };
}

export default App;
