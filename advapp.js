console.log("ADVANCE JS");

// Promises
// Represnt both success failure and pending state of async operation


// Promise banarahe
// const customPromise = new Promise((resolve,reject)=>{
//     // Task


//     setTimeout(()=>{
//         console.log("Work done");
        
//         resolve("success")
//     },2000);
// });
// // using promise
// customPromise.then(
//     (result)=>{
//         console.log("INN"+result);
        
//     }
// ).catch((error)=>{
//     console.log("error"+error);
    
// });

function fetchDataFromDb(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = false;

            if(success){
                resolve({name:"Ayush",age:25})
            }else{
                reject("Wrong");
            }
        },3000)
    });
}

// console.log("First Line");

// console.log("Second Line");

// const proom = fetchDataFromDb();

// proom.then((result) =>{
//     console.log(result);
    
        
//     }).catch((error)=>{
//         console.log(error);
        
//     });
    


// console.log("Third Line");

// console.log("Fourth Line");


// async and await


async function loadData(){
    console.log("First Line");

console.log("Second Line");
try{

    const proom =await fetchDataFromDb();
    console.log(proom);
}catch(error){
    console.log(error);
    
}
console.log("Third Line");

console.log("Fourth Line");

}


loadData();