const promisOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        const error = true;
        if(!error)
        {
            console.log("test");
            resolve({username: "Dharm",email: "dharm@gmail.com"});
        }
        else{
            console.log("failed");
            reject("ERROR:- Something went wrong!");
        }
    },1000);    
});

// promisOne
// .then((data) => {
//     // console.log(data.username)
//     return data.username;
// })
// .then((username) => {
//     console.log(username)
// })
// .catch((error) => {
//     console.log(error)
// });

//using async await

async function consumePromise(){
    try {
        const response = await promisOne;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise();


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
    
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    console.log(error)
})