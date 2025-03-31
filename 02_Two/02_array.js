const ind_heros = ["Sri Ram","hanuman","Ganesh","devi mata"]
const mar_heros = ["iron man","spider man","Doctor Strange"]

// console.log(ind_heros)
// console.log(mar_heros)

// ind_heros.push(mar_heros)
// console.log(ind_heros)

const all_hero = ind_heros.concat(mar_heros)
// console.log(all_hero)

//concat spride operator

// const all_new_heros = [...ind_heros, ...mar_heros]
// console.log(all_new_heros)

// const all_n_heros = [...ind_heros, ...mar_heros, ...all_hero]
// console.log(all_n_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


// data scraping 

console.log(Array.isArray("arjun"))
console.log(Array.from("ARJUN"))
console.log(Array.from({name : "ARJUN"}))  //create to iterable value ,  intresting

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))  // Array.of - mulitiple variable value store 