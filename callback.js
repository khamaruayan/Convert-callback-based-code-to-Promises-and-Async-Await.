/*function taskOne(){
    console.log("task 1");
}
function taskTwo(){
    console.log("task 2");
}

setTimeout (taskOne, 2000);
taskTwo();*/
/*const message=function(){
    console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);*/
/*setTimeout(function(){
    console.log("This message is shown after 3 seconds");
}, 3000);*/
/*setTimeout(() =>{
    console.log("This message is shown after 3 seconds");
}, 3000);*/
document.querySelector("#callback-btn")
.addEventListener("click", function(){
    console.log("User has clicked on thye button");
});
