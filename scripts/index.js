const p1Input = document.getElementById("p1")
const x1Input = document.getElementById("x1")
const answer1 = document.getElementById("answer1")

const p2Input = document.getElementById("p2")
const x2Input = document.getElementById("x2")
const answer2 = document.getElementById("answer2")

const p3Input = document.getElementById("p3")
const x3Input = document.getElementById("x3")
const answer3 = document.getElementById("answer3")

//FORMULA FIRST OPERATION

function calculateOperation1()  {
    let p1 = p1Input.valueAsNumber
    let x1 = x1Input.valueAsNumber

    let result1 = (x1 * (p1/100)).toFixed(2)
    answer1.innerHTML = result1
}

//FORMULA SECOND OPERATION

function calculateOperation2()  {
    let p2 = p2Input.valueAsNumber
    let x2 = x2Input.valueAsNumber

    let result2 = ((p2/x2) * 100).toFixed(2)
    answer2.innerHTML = result2 + "%"
    console.log(result2)
}

//FORMULA THIRD OPERATION  

function calculateOperation3()  {
    let p3 = p3Input.valueAsNumber
    let x3 = x3Input.valueAsNumber

    let result3 = ((x3-p3)/p3*100.0).toFixed(2)
    answer3.innerHTML = result3 + "%"
    console.log(result3)
}