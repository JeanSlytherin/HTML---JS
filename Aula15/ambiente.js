let num = [3,5,8]
num[3] = 6
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O Primeiro valor do vetor é ${num[1]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
