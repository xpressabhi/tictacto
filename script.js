
const cellDiv = document.querySelectorAll('.cell .card-body');

console.log(cellDiv.length);

for (let index = 0; index < cellDiv.length; index++) {
    const element = cellDiv[index];
    console.log(element.innerText);
    
}


// cellDiv.addEventListener('click', changeText);

// function changeText(){
//     console.log('callling');
// }
