import React, { Component } from 'react';
import './App.css';
import {WhoWin} from "./whoWin";

const SQUARE_ON_BOARD = 9;
let elems =[];
// if user want play with x
let value = 'x';
// if user want play with 0
// let value = '0';
for(let i=0; i<SQUARE_ON_BOARD; i++) {
    elems.push(" ");
}
//-----------------------------------------------------------------------------no touch
//
let arr = [
    ['x','',''],
    ['','x',''],
    ['','','x']
];
let current = arr[1][1];


// function findNeighb (arr, center) {
//     for(let j = 0; j < arr.length; j++) {
//         for(let n = 0; n < arr[j].length; n++) {
//             let current = arr[j][n],
//                 center = arr[1][1],
//                 equalElement;
//             if(arr[j][n] == value ) {
//                 equalElement = arr[j][n];
//                 console.log(equalElement);
//             }
//
//
//             let isSame = [],
//                  neighb1 = arr[1-1][1-1],
//                  neighb2 = arr[1-1][1],
//                  neighb3 = arr[1-1][1+1],
//                  neighb4 = arr[1][0],
//                  neighb5 = current,
//                  neighb6 = arr[1][2],
//                  neighb7 = arr[2][0],
//                  neighb8 = arr[2][1],
//                  neighb9 = arr[2][2];
//             console.log(neighb8);
//
//         }
//     }
// };
// findNeighb(arr);

// let direction = {
//     0 : [-1,-1],
//     1 : [-1,0],
//     2 : [-1,1],
//     3 : [0,-1],
//     4 : [0,+1],
//     5 : [+1,-1],
//     6 : [+1,0],
//     7 : [+1,+1]
//    };

function findNeighb (arr) {
    for(let y = 0; y < arr.length; y++) {
        for(let x = 0; x < arr[y].length; x++) {
            let current = arr[y][x];
            if(arr[y][x] == value) {



            }


        }
    }
};
//-----------------------------------------------------------------------------no touch



//
// for(let j = 0; j < arr.length; j++) {
//     for(let n = 0; n < arr.length; n++) {
//         if (n === arr.length - 1)
//            console.log(arr[j][n]);
//         else
//             console.log(arr[j][n] + ", ");
//
//     }
//
// }


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {value:null};
    };

    matrix = (rows, cols, defaultValue) => {
        let arr = [];
        for(let i=0; i < rows; i++){
            arr.push([]);
            arr[i].push( new Array(cols));
            for(let j=0; j < cols; j++){
                arr[i][j] = defaultValue[(rows*i) +j];
            }
        }
        return arr;
    };

    checkDirection = (y,x,direction,n,arr, value) => {
        const nY = direction[0]+y;
        const nX = direction[1]+x;
        console.log(direction[0], direction[1]);
        const nextCoordinate = arr[nY][nX];

        if(nextCoordinate === value){
            console.log(nextCoordinate);
            if(n === 0){
                return true;
            }
            return this.checkDirection (nY, nX, direction, n-1, arr);
        }
        return false;
    };

    // findNeighb = (arr) => {
    //     for(let y = 0; y < arr.length; y++) {
    //         for(let x = 0; x < arr[y].length; x++) {
    //             let current = arr[y][x];
    //             if(arr[y][x] == value) {
    //                 this.checkDirection(y,x,direction[0], 2, matrixArray);
    //
    //
    //             }
    //
    //
    //         }
    //     }
    // };

    // horizontalCheck = (elems) => {
    //     for(let j = 0; j < elems.length; j++) {
    //         let counter = 1;
    //         for(let n = 0; n < elems.length; n++) {
    //             if(elems[j][n] === value && elems[j][n] === elems[j][n+1]) {
    //                 counter++;
    //                 if(counter===3)
    //                     console.log('win, end');
    //
    //             } else {
    //                 counter = 1;
    //             }
    //         }
    //     }
    // };


    checkWinner = (elems) => {
        let matrixArray = this.matrix( 3, 3, elems);
        // this.horizontalCheck(matrixArray);

        let direction = {
            0 : [-1,-1],
            1 : [-1,0],
            2 : [-1,1],
            3 : [0,-1],
            4 : [0,+1],
            5 : [+1,-1],
            6 : [+1,0],
            7 : [+1,+1]
        };

        // let direction = {
        //     0 : [0,0],
        //     1 : [0,+1],
        //     2 : [0,+2],
        //     3 : [+1,0],
        //     4 : [+1,+2],
        //     5 : [+2,0],
        //     6 : [+2,+1],
        //     7 : [+2,+2]
        // };

        // try {

            for(let y = 0; y < arr.length; y++) {
                for(let x = 0; x < arr[y].length; x++) {
                    // let current = arr[y][x];
                    if(arr[y][x] == value) {
                        this.checkDirection(y,x,direction[0], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[1], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[2], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[3], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[4], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[5], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[6], 2, matrixArray, value);
                        this.checkDirection(y,x,direction[7], 2, matrixArray, value);
                    }
                }
            }

        // } catch(e) {
        //
        //     alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
        //
        // }



    };

    setValue = () => {
        this.setState({value:value});
        for(let i=0; i<elems.length; i++) {
            elems[this.props.dataKey] = value;
        }
        this.checkWinner(elems);
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

