
// Callback.js

// const Posts= [
//     {title:"Post One", text :"This is content of Post One"},
//     {title:"Post Two", text :"This is content of Post Two"},
//     {title:"Post Three", text :"This is content of Post Three"}
// ];

// function getPost(){
//     setTimeout(()=>{
//         let result = ' '
//         Posts.forEach((post)=>{
//             result += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = result
//     },2000)
// }

// function createPost(post,getPost){  //getPost as call back function.
//     setTimeout(()=>{
//         Posts.push(post)
//         getPost();
//     },3000)
// }

// createPost({title:"Post Four", text:"This is content of Post Four"},getPost)


//Promise.js
// const Posts= [
//     {title:"Post One", text :"This is content of Post One"},
//     {title:"Post Two", text :"This is content of Post Two"},
//     {title:"Post Three", text :"This is content of Post Three"}
// ];

// function getPost(){
//     setTimeout(()=>{
//         let result = ' '
//         Posts.forEach((post)=>{
//             result += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = result
//     },2000)
// }

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             Posts.push(post)
//             const error = true;
//             if(error){
//                 resolve();
//             }
//             else{
//                 reject("Error: Something went wrong")
//             }
//         },3000)
//     })
// }

// createPost({title:"Post Four", text:"This is content of Post Four"}).then(getPost).catch(err=> document.body.innerHTML=err)

// //AsyncAwait.js

// const Posts= [
//     {title:"Post One", text :"This is content of Post One"},
//     {title:"Post Two", text :"This is content of Post Two"},
//     {title:"Post Three", text :"This is content of Post Three"}
// ];

// function getPost(){
//     setTimeout(()=>{
//         let result = ' '
//         Posts.forEach((post)=>{
//             result += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = result
//     },1000)
// }

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             Posts.push(post)
//             const error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("Error: Something went wrong")
//             }
//         },2000)
//     })
// }

// async function init(){
//     await createPost({title:"Post Four", text:"This is content of Post Four"})
//     getPost();
// }
// init()
