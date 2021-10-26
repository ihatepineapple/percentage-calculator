const p1Input = document.getElementById("p1")
const x1Input = document.getElementById("x1")
const answer1 = document.getElementById("answer1")

//FORMULA FIRST OPERATION

function calculateOperation1()  {
    let p1 = p1Input.valueAsNumber
    let x1 = x1Input.valueAsNumber

    let result1 = x1 * (p1/100)
    answer1.innerHTML = result1
    console.log(result1)
}