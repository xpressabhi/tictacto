// const classname = '.cell .card-body';
// const cellDiv = document.querySelectorAll(classname);
// const arr= [1, 'aaa', true, [5, true, [6, true]]];
// const arr2 =[];
// const arr3 = [];
// console.log(arr);
// console.log(arr.length);
// let name = false;
// console.log(cellDiv.length);
let num =new Number(1.2222);
console.log(num);
let dog = {
    name : 'tiger',
    age: 10,
    alive: true,
    breed: 'local',
    eatingSchedule:['biscuit', 'roti', 'milk'],
    bark: function(){
        console.log(this.name + ' is barking');
    },
    details: function(){
        console.log('Dog name is '+ this.name);
        console.log('Dog age is '+ this.age);
        if(this.alive){
            console.log('Dog is alive');
        }else {
            console.log('Dog is dead');
        }
        
    }
};



// console.log(dog);
// dog = 17;
// console.log(dog);
// let post = {
//     title : '',
//     content: '',
//     summary:'',
//     createdDt:'',
//     updatedDt:'',
//     likedBy:[11,33,555,777],
//     author:'abc'
// }

// console.log(post.likedBy.length);

//const allposts = [post, post2, post3, post4];


allposts= 100;
//const box = [100,100,100,100,...........,0,100,100,.....];

// for (let index = 0; index < cellDiv.length; index++) {
//     console.log('index', index);
//     const element = cellDiv[index];
//     console.log(element.innerText);
//     if(index === 5) {
//         console.log('index is :', index);
//     } else if(index ===7 ){
//         console.log('index is 7');
//     }
//      else{
//         console.log('index is not 5');
//     }
    
//}
// let index2 = 0;
// while(index2 < cellDiv.length){
//     console.log('index', index2);
//     const element = cellDiv[index2];
//     console.log(element.innerText);
//     index2++
// index2 = index2+1;

// }
// cellDiv.addEventListener('click', changeText);

// function changeText(){
//     console.log('callling');
// }
