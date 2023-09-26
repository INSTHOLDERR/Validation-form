
const form = document.getElementById("formm");

form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updation);
});


window.addEventListener("load", loading);

function updation() {
    const formData = {};

    
    form.querySelectorAll("input").forEach(input => {
        formData[input.name] = input.value;
        if (input.type === "checkbox") {
            formData[input.name] = input.checked;
        }
    })

  
    localStorage.setItem("formData", JSON.stringify(formData));
}

function loading() {
    const formData = JSON.parse(localStorage.getItem("formData")) || {};

  
    form.querySelectorAll("input").forEach(input => {
        const value = formData[input.name];

        if (typeof value !== "undefined") {
            if (input.type === "checkbox") {
                input.checked = value;
            } else {
                input.value = value;
            }
        }

    })
}


function clearValues() {
    localStorage.removeItem("formData");
}


function submission() {
    const username = document.getElementById('username').value
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('mail').value
    const number = document.getElementById('number').value
    const password = document.getElementById('password').value
    const development = document.getElementById('development').value
  


if (email ==true ){
        const userData = {
            username:username,
            firstname:firstname,
            lastname:lastname,
            email:email,
            number:number,
            interets:development
        }
        localStorage.setItem("userData", JSON.stringify(userData));

alert("Registration successful!");
    }
}
    

        
       
        


