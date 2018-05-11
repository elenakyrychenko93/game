import React, { Component } from 'react';
import './App.css';
import {WhoWin} from "./whoWin";

const SQUARE_ON_BOARD = 9;
let elems =[];
// if user want play with x
let value = 'x';
// if user want play with 0
// let value = '0';
let winCombination = [
    [value,value,value,0,0,0,0,0,0],
    [0,0,0,value,value,value,0,0,0],
    [0,0,0,0,0,0,value,value,value],
    [value,0,0,0,value,0,0,0,value],
    [0,0,value,0,value,0,value,0,0],
    [0,value,0,0,value,0,0,value,0],
    [value,0,0,value,0,0,value,0,0],
    [0,0,value,0,0,value,0,0,value]
];
for(let i=0; i<SQUARE_ON_BOARD; i++) {
    elems.push(null);
}

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {value:null};
    };

    checkWinner = (winCombination,elems) => {
       for(let i=0; i<elems.length; i++) {
           let current = elems[i];
           for(let j=0; j<winCombination.length; j++) {
               }
           }


    };

    setValue = () => {
        this.setState({value:value});
        for(let i=0; i<elems.length; i++) {
            elems[this.props.dataKey] = value;
        }
        this.checkWinner(winCombination,elems);
    };

    render() {
        return (
            <div className='square' onClick={this.setValue}>{this.state.value}</div>
        )
    }
}

class Board extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        let board = elems.map((item, index) => <Square dataKey={index} key={index} />);
        return (
            <div id='board'>
                {board}
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Board />
        )
    }
}
export default App;

