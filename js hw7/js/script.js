"use strict"
///OLD VERSION//
// const div = document.getElementById('root');
// let ul = document.createElement('ul');
// div.appendChild(ul);
// let data = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

// for (let i = 0, ln = data.length; i <ln; i++) {

//   let li = document.createElement('li');

//   li.innerHTML = data[i];

//   ul.appendChild(li);
// };

///NEW VERSION//

const div = document.getElementById('root');
let ul = document.createElement('ul');
div.appendChild(ul);
let arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
let result = arr.map(function(item, index ,array){

let li = document.createElement('li');

  li.innerHTML = arr[index];

  ul.appendChild(li);
});

























