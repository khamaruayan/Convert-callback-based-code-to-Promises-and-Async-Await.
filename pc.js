// let promise=new Promise((resolve, reject)=>{
//     resolve();
// })
// promise
// .then(()=>{
//     console.log('first');
// })
// .then(()=>{
//     console.log('second');
// })
// .then(()=>{
//     console.log('third');
// })
// .catch((error)=>{
//     console.log('error', error);
// });
// let promise=new Promise((resolve, reject)=>{
//     resolve();
// })
// promise
// .then(()=>{
//     console.log('first');
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log('second');
//     }, 2000);
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log('third');
//     }, 1000);
// })
// .catch((error)=>{
//     console.log('error', error);
// });
let promise=new Promise((resolve, reject)=>{
    resolve();
})
promise
.then(()=>{
    console.log('first');
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('second');
            resolve();
        }, 2000);
    })
})
.then(()=>{
    setTimeout(()=>{
        console.log('third');
    }, 1000);
})
.catch((error)=>{
    console.log('error', error);
});