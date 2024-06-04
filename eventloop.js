/*function multiply(a, b){
    console.log(a*b);
}

multiply(2, 3);*/

/*function addition(a, b){
    console.log(a+b);
}

addition(3, 4);*/

/*console.log('hi');
setTimeout(function cb(){
    console.log('there');
}, 5000);

console.log('JSconfeu');*/

/*setTimeout(function timeout(){
    console.log('hi');
}, 1000);

setTimeout(function timeout(){
    console.log('hi');
}, 1000);

setTimeout(function timeout(){
    console.log('hi');
}, 1000);

setTimeout(function timeout(){
    console.log('hi');
}, 1000);*/

async function doWork(){
    const response=await makeReqest('Google')
    console.log('Response Received')
    const processedResponse=await processedResponse(response)
    console.log(processedResponse)
}
doWork()



