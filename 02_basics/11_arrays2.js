const marvel_heros =["thor","ironman","spiderman"]
const dc_heros =["batman","superman","flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)

console.log(marvel_heros[3][0])


const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros)


const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) 

console.log(real_another_array)