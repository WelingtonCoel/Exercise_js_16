let num =[5,8,4] //declare one array (vetor) [5 key 0, 8 key1, 4 key 2]
num [3] = 6 // add 6 at the position 3 -> [5,8,4,6], now it have four elements, a new value and identification key has been added
num.push(7) //add 7, criating another position in the array [5,8,4,3,7], now it have five elements
num.sort() //sorted the array, now is [4,5,6,7,8], it has been sorted [4 key 0, 5 key1, 6 key 2, .....]
num.indexOf(7)// get the KEY from the number 7 -> (has finded element number 3)
num.length //count the number of elements from arrays -> (5 elements)
console.log(`Posição do número 7 no vetor é  ${num.indexOf(7)}.`)//show the position from number 7 geted by method indexOf
console.log(`Vetor com ${num.length} elementos.`)//show the number of elements geted by atributs length

for(let pos in num){
    console.log(`O número ${num[pos]} está na posição ${pos}.`)
} 
/*  Ex. [5,8,4,3] this array have:
        Four elements, each one composed by value and (key or indice chave) 0, 1, 2, 3
*/ 
