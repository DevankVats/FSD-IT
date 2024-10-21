function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const students=[
            {name:"Alice",score:50},
            {name:"Bob",score:60},
            {name:"charlie",score:80},
            {name:"Pop",score:90},

           ];
            resolve(students);
        },4000);
    });
}

fetchdata().then((data)=>console.log(data))
.catch((error)=>{
    console.log(error); 
});
