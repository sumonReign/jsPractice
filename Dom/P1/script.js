const divs = document.querySelectorAll('div')
// console.log(divs);
divs.forEach((div)=>{

    div.addEventListener('click', (e)=>{
       if (e.target.id === "palevioletred"){
       document.body.style.backgroundColor = e.target.id
       }
       if (e.target.id === "palevioletred"){
        document.body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "palevioletred"){
            document.body.style.backgroundColor = e.target.id
            }
            if (e.target.id === "palevioletred"){
                document.body.style.backgroundColor = e.target.id
                }
    })

})
