const colors = require('colors');

export const error = msg => {
    console.log(msg.red);
};

export const info = msg => {
    console.log(msg.green);
}

export const warn = msg => {
    console.log(msg.blue);
}

export const debug = msg => {
    console.log(msg.gray);
} 