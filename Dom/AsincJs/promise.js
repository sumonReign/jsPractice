const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise one")
        resolve({username: "sumon", id: 1520}); // data that is hold by resolve pass to then 
    }, 2000)
})

promiseOne.then(function(user){
   console.log(user.username)
})