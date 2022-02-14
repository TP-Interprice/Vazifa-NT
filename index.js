// function myConverter(value, operator){
//     if(operator == "num") return value - 0
//     else if(operator == "str") return value +""
//     else if(operator == "bool") return !!value
//     else return "Enter valid operator!"
// }
// console.log(myConverter(23051998,"str"))


// let div = document.createElement('div');
// // div.style.width = "400px";
// // div.style.height = "200px";
// // div.style.backgroundColor = "red";

// let body = document.querySelector("body");
// body.prepend(div);
// function makebook(width,height,color,position){
//         div.style.width = `${width}px`;
//         div.style.height = `${height}px`;
//         div.style.backgroundColor = color;
//         div.style.position = "absolute";
//         div.style.right = "43%"
// }
// makebook("200","200","blue","right")

// function finMax(array) {
//         // if(operator == arr){
//                 for(let i = 0; i < array.length; i++){
//                         if(array[i] > max){
//                                 max = array[i];
//                         }
//                 }
//                 return max
//         }
// // }
// let arr = [21,3,431,5,65,75], max = arr[0];
// console.log(finMax(arr))

// function getSum(array){
//         for(let i = 0; i < array.length; i++){
//                 sum += array[i];
//         }
//         return sum
// }
// let arr = [21,3,431,5,65,75], sum = 0;
// console.log(getSum(arr))



// function filterOdds(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 1){
//          console.log(array[i])
//         }
//     }
// }

// let arr = [12,32,4,35,6,5,45,7];
// filterOdds(arr);


// let ism = "Hello World";
// let object = ism.split("");
// console.log(object)
// console.log(object[0])
// for(let i = 0; i < 5; i++){
//     console.log(object[i])
// }

// let a = [1,2,3,4,5,6,7,8,9,10], b = [11,12,13,14,15,16,17,18,19,20], c;
// c = a.concat(b)
// console.log(c)

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let select = document.querySelector("select");
let button = document.querySelector("button");
let natija = document.querySelector("#natija");

button.addEventListener("click", function(e){
    e.preventDefault();
    if(select.value == "+"){
        natija.textContent = Number(num1.value) + Number(num2.value);
    }
    else if(select.value == "-"){
        natija.textContent = Number(num1.value) - Number(num2.value);
    }
    else if(select.value == "*"){
        natija.textContent = Number(num1.value) * Number(num2.value);
    }
    else if(select.value == "/"){
        natija.textContent = Number(num1.value) / Number(num2.value);
    }
})