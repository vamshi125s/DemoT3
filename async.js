// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// // },5000)
// setInterval(()=>{
//     //  document.writeln("MRU");
//      console.lOg(30);
// },1000)
// console.log(40);
// console.log(50);

//! Promise

// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve,reject)=>{
//     resolve("success");
// })
// console.log(p2);
// p2
// .then((response)=>console.log(response))
// .catch((erre)=>console.log(error))
// .finally(()=>console.log("finally for both"))


// let p3 = new Promise((resolve,reject)=>{
//     reject("failure");
//  });
// // console.log(p3);
// p3.then(data=>{console.log(data)})
// p3.catch(error=>{console.log(error)} )
// p3.finally(()=>{console.log("finally for both")})

// API fetching

// function fetchUsers(){
//     let response = fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     response.then(result=>{
//         //console.log.json();
//         return result.json().then(data=>{
//             // console.log(data);
//             console.log(data);
//             let store = document.getElementById("store");
//             console.log(store);
//             data.map(user=>{
//                 store.innerHTML +=`
//                 <tr>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.company.name}</td>
//                 </tr>
//                 `
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

//Async and await

// function demo(){
//     console.log("Start");
//     console.log(10);
//     console.log(20);
//     console.log(30);
//     console.log(40);
//     console.log("End");
// }
// demo();

let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Success");
    },5000)
})
async function demo(){
    console.log("Start");
    let x = await p;
    console.log(x);
    console.log("End");
};
demo();

async function fetchUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
fetchUsers();
