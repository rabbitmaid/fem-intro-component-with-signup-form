const form = document.querySelector('#trial_form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = [
        {
            "name" : "firstname",
            "field" : form.querySelector('#firstName'),
            "error" : form.querySelector('#firstNameError'),
            "error-icon": form.querySelector('#firstNameError + .error-icon')
        },

        {
            "name" : "lastname",
            "field" : form.querySelector('#lastName'),
            "error" : form.querySelector('#lastNameError'),
            "error-icon": form.querySelector('#lastNameError + .error-icon')
        },

        {
            "name" : "email",
            "field" : form.querySelector('#email'),
            "error" : form.querySelector('#emailError'),
            "error-icon": form.querySelector('#emailError + .error-icon')
        },

        {
            "name" : "password",
            "field" : form.querySelector('#password'),
            "error" : form.querySelector('#passwordError'),
            "error-icon": form.querySelector('#passwordError + .error-icon')
        }
    ];


    inputs.forEach((input) => {

        if(input["field"].value === "") {
            input["field"].classList.add('invalid');
            input["error"].classList.remove('hidden');
            input["error-icon"].classList.remove('hidden');

            if(input["name"] === "firstname"){ 
                input["error"].textContent = "Firstname cannot be empty";
            }

            if(input["name"] === "lastname"){ 
                input["error"].textContent = "Lastname cannot be empty";
            }

            if(input["name"] === "email"){ 
                input["error"].textContent = "Email cannot be empty";
            }

            if(input["name"] === "password"){ 
                input["error"].textContent = "Password cannot be empty";
            }
        }

        
    })
 

});