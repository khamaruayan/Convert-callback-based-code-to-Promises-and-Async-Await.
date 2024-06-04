let someData="X";
let moreData="Y";

//Async/await

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

handler();
async function handler(){
    try{
        const array=[getData(someData), getData(moreData)];

    const res=await Promise.all(array);
    
    console.log(res);

    }
    catch(e){
        console.log(e);

    }

    
}