let mystr = "I ilove my Bangladesh"
let obj = {}
for (let x of mystr) {
    if (x === " ") continue
    (obj[x]) ? obj[x]+=1 : obj[x]=1
    
}
console.log(obj);
