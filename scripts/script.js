var angleSum = document.querySelectorAll('.angles')
var btnCheck = document.querySelector('#btn-check')
var outputDiv = document.querySelector('.output')


btnCheck.addEventListener('click', function check() {
  var angles = calculate(Number(angleSum[0].value), Number(angleSum[1].value), Number(angleSum[2].value))
  if (angles === 180) {
    outputDiv.innerHTML = 'The input angles makes a Triangle'
  }
  else if (angles != 180) {
    outputDiv.innerText = `The input angles doesn't make a Triangle`
  }
  isTriangle()

}
)

function calculate(a, b, c) {
  let sum = a + b + c
  return sum
}
function isTriangle() {
  let angle1 = angleSum[1].value
  let angle2 = angleSum[1].value
  let angle3 = angleSum[1].value
  if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    outputDiv.innerText = `The values should not be negative`
  }
  else if (!angle1 || !angle2 || !angle3) {
    outputDiv.innerText = `Please enter all the fields`
  }

}
