function getRandom() {
    return Math.floor(Math.random() * (1 - 60 + 1)) + 1;
    
}

export default function GeradorDeNumeros(qt){
    let array = []

    for (let index = 0; index < qt; index++) {
        
        array.push(getRandom())
    }
    console.log(array)
     
    return array
}