//Get user input from form
const formData = document.getElementById('register-form');

formData.addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = document.getElementById("floatingName").value
    const email = document.getElementById("floatingInput").value 
    const password = document.getElementById("floatingPassword").value
    const confPass = document.getElementById("confirmPassword").value

    if(password == confPass){
        console.log("Same pass");
    } else {
        //Alert if passwords don't match
        console.log("Wrong pass");
    }
    console.log(name, email, password, confPass)

    
})