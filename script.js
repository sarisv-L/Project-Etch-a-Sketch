'use strict';

const container = document.getElementById('container');
const newGridButton = document.getElementById('btn');
const resetButton = document.getElementById('reset');
const randomColor = document.getElementById('randomColor');
let randomColorEnable = false;

//Random Color Function
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide) {
  //Clear existing Grid
  container.innerHTML = '';
  const color = getRandomColor();

  const totalSquares = squaresPerSide * squaresPerSide;
  // prettier-ignore
  const itemSize = 640 / squaresPerSide; // Calc size of each square

  for (let i = 0; i < totalSquares; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.style.width = `${itemSize}px`;
    content.style.height = `${itemSize}px`;
    container.appendChild(content);

    ///Mouseover effect
    content.addEventListener('mouseenter', function () {
      if (randomColorEnable) {
        content.style.backgroundColor = getRandomColor();
      } else content.classList.add('hovered');
    });

    //Reset Button
    resetButton.addEventListener('click', () => {
      content.style.backgroundColor = '';
      randomColorEnable = false;
      content.classList.remove('hovered');
    });
  }
}

// Button Event Listener

randomColor.addEventListener('click', () => {
  randomColorEnable = true;
});

newGridButton.addEventListener('click', () => {
  const userInput = prompt('Enter the number of squares per side(e.g., 16):');
  const squaresPerSide = parseInt(userInput, 10);

  if (
    squaresPerSide > 0 &&
    squaresPerSide < 100 &&
    Number.isInteger(squaresPerSide)
  ) {
    createGrid(squaresPerSide);
  } else {
    alert('Please enter a valid positive Integer from 0-100.');
  }
});

createGrid(16);
