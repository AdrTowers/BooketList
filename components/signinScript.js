

//Get user input from form
const formData = document.getElementById('signin');

formData.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.getElementById("floatingInput").value 
    const password = document.getElementById("floatingPassword").value
    console.log(email, password)
    
})