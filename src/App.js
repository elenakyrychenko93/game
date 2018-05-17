import React, {Component} from 'react';
import {Board} from './Board';
import './App.css';


export const SQUARE_ON_BOARD = 9;
export let elems = [];
// if user want play with x
export let value = 'x';
// if user want play with 0
// let value = '0';
for (let i = 0; i < SQUARE_ON_BOARD; i++) {
    elems.push(" ");
}

class App extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        const socket = io();
        console.log(socket);
    }

    render() {
        return (
            <Board />
        )
    }
}
export default App;

