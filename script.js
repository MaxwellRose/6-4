let base1 = 0
let base2 = 0
let height = 0
let area = 0

document.getElementById('calculate').addEventListener('click', formula)

function formula () {
  base1 = document.getElementById('input1').value
  base2 = document.getElementById('input2').value
  height = document.getElementById('input3').value

  base1 = parseInt(base1)

  base2 = parseInt(base2)

  height = parseInt(height)

  area = (base1 + base2) / 2 * height

  alert(area)
}
