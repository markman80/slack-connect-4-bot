const Slot = require('./slot');
const Emoji = require('./emoji');

const WIDTH = 7;
const HEIGHT = 6;

class Board {

    constructor() {
        this.slots = initialiseSlots();
    }

    getCounterAt(row, col) {
        return this.slots[row][col];
    }

    toString() {
        var display = "";
        for (let i = this.slots.length - 1; i >= 0; i--) { // so board prints in the correct orientation
            for (let slot of this.slots[i]) {
                display += slot.toString();
            }
            display += '\n';
        }
        for(let i = 1; i<= 7; i++) {
            display += Emoji.number[i] + ' ';
        }
        return display;
    }
}

function initialiseSlots() {
    var rows = [];
    for (let i = 0; i < HEIGHT; i++) {
        let columns = [];
        for (let j = 0; j < WIDTH; j++) {
            columns.push(new Slot(i, j));
        }
        rows.push(columns);
    }
    return rows;
}

module.exports = Board;