

// //CallBack çalışması

// console.log("Start");

// const login = (username, password, callback) => {
//     setTimeout( () => {
//         callback ( {username: username, email: "yusuf.tetik@wediacorp.com"})

//     },1000);
// }

// const getPostByUsername = (username, callback) => {
//     setTimeout( () => {
//        callback(["post 1","post 2","post 3"]);
//     },2000)
// }

// const getPostDetails = (post, callback) => {
//     setTimeout( () => {
//         callback("Post Details");
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
// });

// console.log("End");

// // Ajax ve Json çalışması 

// // Ülke bilgileri getirme uygulaması

function displayCountry(country) {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.com/v3.1/name/' + country);
    request.send();

    // async

    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        console.log(data);            
        setCountry(data[0]);
    });
   }

   function setCountry(data) {
       const html = `
            <div class="col-3">
                <div class="card h-100">
                    <img src="${data.flags.png}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${data.name.common}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Population: ${(data.population / 1000000).toFixed(1)} </li>
                        <li class="list-group-item">Capital: ${data.capital[0]} </li>
                        <li class="list-group-item">Language: ${Object.values(data.languages)} </li>
                    </ul>
                </div>
            </div>
       `;

       document.querySelector(".container .row").insertAdjacentHTML("beforeend", html);
   }


   displayCountry("turkey");
   displayCountry("azerbaijan");


