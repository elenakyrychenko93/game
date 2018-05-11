import React, { Component } from 'react';
import './App.css';

const SQUARE_ON_BOARD = 9;
let elems =[];
for(let i=0; i<SQUARE_ON_BOARD; i++) {
    elems.push(null);
}


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {value:null};
    };

    setValue = () => {
        this.setState({value:'x'});
        for(let i=0; i<elems.length; i++) {
            elems[this.props.dataKey] = 'x';
        }
        console.log(elems);
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

