/*
class ClickAndHold {

    
        @param target // The HTML element to apply the event to
        @param callback // The function to run once the target is clicked and held
    
    constructor(target, callback){
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;

        ["mousedown", "touchstart"].forEach(type => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });
    }

    _onHoldStart() {
        this.isHeld = true;

        this. activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {
                this.callback();
            }
        }, 1000)
    }

    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}
*/

const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', changeGridSize);
window.addEventListener('load', baseGrid);

function baseGrid() {
    setGridSize(16);
    createGrid(16);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList = 'grid-square';
        gridSquare.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(gridSquare);
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeGridSize() {
    let newSize = prompt("Enter new grid size");
    console.log(Number.isNaN(newSize));

    newSize = parseInt(newSize);
    if(newSize<1 || newSize > 100 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-100");
        changeGridSize();
    } else {
        clear();
        setGridSize(newSize);
        createGrid(newSize);
    }
}

function clear() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element)=>{
        gridContainer.removeChild(element);
    })
}