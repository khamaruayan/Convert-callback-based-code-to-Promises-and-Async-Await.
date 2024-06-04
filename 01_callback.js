let someData="X";
let moreData="Y";

//callbacks
function getData(src, callback){
    setTimeout(()=>{
        const data=src;
        callback(data);
    }, 1000);
}

let array=[];
getData(someData, (res)=>{
    array.push(res);
    getData(moreData, (res)=>{
        array.push(res);
        document.body.innerHTML=array;

    })
    
});

//HTTP request with AJAX
// function getData(callback){
//     const req=new XMLHttpRequest();
//     req.open('GET', 'https://reqres.in/api/users');
//     req.addEventListener('load', function(){
//         const res=JSON.parse(req.responseText);
//         callback(res);
//     });
//     req.send();
// };

// getData((res)=>{
//    res.data.forEach((user)=>{
//     const markup=
//     <div>
//         <span>${user.id}, ${user.first_name}, ${user.email}</span>
//     </div>
//     ;
//     document.body.innerHTML+=markup;
//    })
// });

//common methods that accept a function

// element.addEventListener('click', ()=>{
//     console.log("click!");
// });

// setTimeout(()=>{
//     console.log("Do something after a delay");
// }, 1000);

// setInterval(()=>{
//     console.log("Do something repeatedly");
// }, 1000);

//callback 'hell'

// setTimeout(()=>{
//     console.log("Task 1");
//     setTimeout(()=>{
//         console.log("Task 2");
//         setTimeout(()=>{
//             console.log("Task 3");
//         }, 1000);
//     }, 1000);
// }, 1000);