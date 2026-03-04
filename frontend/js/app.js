const API = "http://localhost:5000/api"

async function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

await fetch(API+"/auth/login",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({email,password})
})

window.location="dashboard.html"

}

async function addChicken(){

const breed = document.getElementById("breed").value
const age = document.getElementById("age").value
const quantity = document.getElementById("quantity").value

await fetch(API+"/chickens/add",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({breed,age,quantity})
})

alert("Chicken Added")

}

async function addEgg(){

const count = document.getElementById("eggCount").value

await fetch(API+"/eggs/add",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({count})
})

alert("Egg Data Added")

}