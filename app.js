document.addEventListener('DOMContentLoaded', () => {
  // our code goes here
  // find our grid
  const grid = document.querySelector('.grid')
  // select all divs inside and turn them into an array
  let squares = Array.from(document.querySelectorAll('.grid div'))
  // find our span id=Score and also our button
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start-button')
  const width = 10

  console.log(squares)
})
