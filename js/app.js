// Fizz Buzz Game:

let myFunc = (event) => {
    event.preventDefault();
let empArr = [];
// let para = document.querySelector("#para");
let inpVal = +document.querySelector("#inp").value;
// console.log(inpVal);
for(let i=1; i<=inpVal; i++){
    empArr[i] = i;
    if(empArr[i] % 3 === 0 && empArr[i] % 5 === 0){
        empArr[i] = "fizzbuzz";
    }
    else if(empArr[i] % 3 === 0){
        empArr[i] = "fizz";
    }
    else if(empArr[i] % 5 === 0){
        empArr[i] = "buzz";
    }
//    console.log(empArr[i]);
//    para.innerHTML += empArr[i];
}

document.querySelector("#head").innerHTML = empArr.join(' ');
// console.log(empArr);

// let app = document.querySelector('#list');
// let nodes = empArr.map(lang => {
//     let li = document.createElement('li');
//     li.textContent = lang;
//     return li;
// });
// app.append(...nodes);
}
document.addEventListener('submit', myFunc);