"use strict"

let items = ['hello', 'world', 23, '23', null]

const filterBy = (arr, type) => arr.filter(item => typeof item !== type)

console.log(filterBy(items, "string"))



