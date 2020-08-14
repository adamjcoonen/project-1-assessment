console.log('hello world')  

/*----- the constant variables----- */
let total = []


/* -------- stored variables --------*/

let input;
let inputNeg;
let arrTotal
/*-------- cached values to be used -----*/

let inputEl = document.getElementById('input')
let totalEl = document.getElementById('total')


/* ------- event listeners ----------*/

document.getElementById('add').addEventListener('click', addTotal );
document.getElementById('sub').addEventListener('click', addTotal );
// butEl = document.querySelector('button').addEventListener('mouseover', changeColor)


/* -------- functions -----------*/
init()
function init (){
    inputEl.value = 1
}
// function changeColor(e){
//     e.target.style.backgroundcolor = 'white'  
// };

function addTotal(e){ 
    if (e.target.id === 'add'){
    input = parseInt(inputEl.value)
    total.push(input)
} else { 
    inputNeg = (parseInt(inputEl.value) * -1)
    total.push(inputNeg)
}
rendtotal();
}

function rendtotal() {
 arrTotal = total.reduce(function(a,b){
        return a + b;
    })
    totalEl.innerText = arrTotal
}
