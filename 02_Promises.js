let someData="X";
let moreData="Y";

//Promises

function getData(src){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data=src;
            if(!data){
                reject("No data");
            }
            resolve(data);
        },1000);

    })
   
}

const Promises=[getData(), getData(moreData)];

Promise.any(Promises)
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})