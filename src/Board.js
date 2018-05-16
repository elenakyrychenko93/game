import React, {Component} from 'react';
import App from './App';
import {elems} from './App';
import {Square} from './Square';

export class Board extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        let board = elems.map((item, index) => <Square dataKey={index} key={index}/>);
        return (
            <div id='board'>
                {board}
            </div>
        )
    }
}