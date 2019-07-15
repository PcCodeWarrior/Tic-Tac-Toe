import React, { Component } from 'react';
import Board from './Board';
import './App.css';

import {values} from './startingValues';

class App extends Component {
    render() {
        return <div>
         <Board values={values}/>
        </div>;
    };
}

export default App;
