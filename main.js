//javascript errors and error handling

//const variable="Dave";
//console.log(variable);
//Object. .Create();
//const name="Dave";
//name="Joe";
const makeError=()=>{
    let i=1;
    while(i<=5)
        {
            try{
                if(i%2!==0){
                    throw new Error("odd number!");
                }
                console.log("Even number!");
            }
            catch(err){
                console.error(err.stack);
        
            }finally{
                console.log("...finally");
                i++;
            }

        }
    
};
makeError();

// function customError(message){
//     this.message=message;
//     this.name="customerError";
//     this.stack='${this.name}: ${this.message}';
// }

// const variable="Dave";
// console.log(variable);
//Object. .create();
// const name="Dave";
// name="Joe";
