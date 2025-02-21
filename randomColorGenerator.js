function colorGenerator(){
    let hex = '123456789ABCDEF'
    let color = "#"
    for(i = 0; i<6 ; i++){
        color += hex[Math.round(Math.random() * 16)]
    }
    return color
}
let cl = colorGenerator()
console.log(cl)