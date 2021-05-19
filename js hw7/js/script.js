"use strict"

const div = document.getElementById('root');
let ul = document.createElement('ul');
div.appendChild(ul);
let data = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

for (let i = 0, ln = data.length; i <ln; i++) {

  let li = document.createElement('li');

  li.innerHTML = data[i];

  ul.appendChild(li);
};














