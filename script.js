const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const body = document.querySelector('body')
const h3 = document.querySelector('h3')
const chosen = document.getElementById('chosen')
const choices = document.querySelectorAll('.choice')

color1.addEventListener('input', makeGradient)
color2.addEventListener('input', makeGradient)

function changeDirection() {
  let directionChoice = chosen.innerHTML
  switch(directionChoice) {
    case 'right': 
      return 'to right, '
    case 'left':
      return 'to left, '
    case 'down':
      return 'to bottom, '
    case 'up':
      return 'to top, '
    case 'top right':
      return 'to top right, '
    case 'top left':
      return 'to top left, '
    case 'bottom right':
      return 'to bottom right, '
    case 'bottom left':
      return 'to bottom left, '   
  } 
}

function makeGradient() {
 let gradient = "linear-gradient(" + changeDirection() + color1.value + ", " + color2.value + ")" 
 
  console.log(gradient)  
  body.style.background = gradient;
  h3.textContent = gradient + ';';
 // body.style.background = 'red'
}

chosen.addEventListener('click', function(){
  choices.style.display = 'block';
})

right.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
left.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
down.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
up.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
topRight.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
topLeft.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
bottomRight.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})
bottomLeft.addEventListener('click', function(){
  chosen.innerHTML = this.innerHTML
  changeDirection()
  makeGradient()
})

