'use strict';

const container = document.getElementById('container');
const newGridButton = document.getElementById('btn');

function createGrid(squaresPerSide) {
  //Clear existing Grid
  container.innerHTML = '';

  const totalSquares = squaresPerSide * squaresPerSide;
  // prettier-ignore
  const itemSize = (960 - (squaresPerSide * 2)) / squaresPerSide; // Calc size of each square

  for (let i = 0; i < totalSquares; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.style.width = `${itemSize}px`;
    content.style.height = `${itemSize}px`;
    container.appendChild(content);
  }
}

// Button Event Listener
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
