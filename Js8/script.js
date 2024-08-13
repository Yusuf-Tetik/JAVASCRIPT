// //CallBack çalışması

// console.log("Start");

// const serverStatus = false;

// const login = (username, password, succsessFn, errorFn) => {
//     setTimeout( () => {
//         if(serverStatus)
//         {
//             succsessFn ( {username: username, email: "yusuf.tetik@wediacorp.com"})
//         }
//         else
//         {
//             errorFn("Server kapalı");
//         }

//     },1000);
// }

// const getPostByUsername = (username, succsessFn) => {
//     setTimeout( () => {
//         succsessFn(["post 1","post 2","post 3"]);
//     },2000)
// }

// const getPostDetails = (post, succsessFn) => {
//     setTimeout( () => {
//         succsessFn("Post Details");
//     },1000)
// }

// login("Tooxyt","12345678", user => {
//     console.log(user.username);
//     console.log(user.email);

//     getPostByUsername(user.username, (posts) => {
//         console.log(posts);

//         getPostDetails(posts[0], (details) => {
//           console.log(details);  
//         })
//     });
// }, (error) => {
//     console.log(error);
// });

// console.log("End");

// // Promise yapısı

// const serverStatus = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (serverStatus)
//         {
//             resolve({username: "Yusuf Tetik"});
//         }
//         else
//         {
//             reject("login error");
//         }
//     },2000)
// });

// promise.then(user => {
//     console.log(user);
// }).catch(err => {
//     console.log(err); 
// })

// //Promise çalışması

console.log("start");

const serverStatus = false;

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(serverStatus) {
                resolve( { username: username, email: "info@sadikturan.com" } )
            } else {
                reject("server is offline");
            }
        },1000);
    })            
}

const getPostsByUsername = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post 1","post 2","post 3"]);
        }, 2000)
    })
}

const getPostDetails = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("post details");
        }, 1000)
    })           
}

// login("sadikturan","12345", user => {
//     console.log(user.username);
    
//     getPostsByUsername(user.username, (posts) => {
//         console.log(posts);

//         getPostDetails(posts[0], (details) => {
//             console.log(details);
//         })
//     });

// });

login("Yusuf Tetik","yt12345")
    .then(user => {
        console.log(user);
        return getPostsByUsername(user.username);
    })
    .then(posts => {
        console.log(posts);
        return getPostDetails(posts[0]);
    })
    .then(details => {
        console.log(details);
    }).catch(err => {
        console.log(err);
    })


console.log("end");

