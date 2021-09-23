const form = document.querySelector('.My-form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');



form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    // const firstnameValue = firstname.value.trim(); 
    // const lastnameValue = lastname.value.trim(); 
    // const emailValue = email.value.trim(); 
    // const passwordValue = password.value.trim(); 

    if (firstname.value == '') {
        setErrorFor(firstname, 'First Name cannot be empty');
    }
    else {
        setSuccessFor(firstname);
    }


    if (lastname.value == '') {
        setErrorFor(lastname, 'Last Name cannot be empty');
    }
    else {
        setSuccessFor(lastname);
    }


    if (email.value == '') {
        setErrorFor(email, 'Email cannot be empty');
    }
    else if (!isEmail(email.value)) {
        setErrorFor(email, 'Looks like this is not an email')
        document.getElementById('email').style.color = "red";
    }
    else {
        setSuccessFor(email);
    }


    if (password.value == '') {
        setErrorFor(password, 'password cannot be empty');
    }
    else {
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
     const formControl = input.parentElement;
     const errorMsg = formControl.querySelector('.error-msg');
     formControl.className = 'form-control error';
     errorMsg.innerText = message;
    
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}










// const formValidation = (event) => {

//     if (firstname.value == "") {
//         form.classList.add('invalid');
//         errorMsg1.innerHTML = "First Name cannot be empty";
//     }

//     else {
//         form.classList.remove('invalid');
//         form.classList.add('valid');
//         errorMsg1.innerHTML = "";
//     }
    
//     if (lastname.value == "") {
//         form.classList.add('invalid');
//         errorMsg2.innerHTML = "Last Name cannot be empty";
//     }

//     else {
//         form.classList.remove('invalid');
//         form.classList.add('valid');
//         errorMsg2.innerHTML = "";
//     }
//     if (password.value == "") {
//         form.classList.add('invalid');
//         errorMsg4.innerHTML = "Password cannot be empty";
//     }

//     else {
//         form.classList.remove('invalid');
//         form.classList.add('valid');
//         errorMsg4.innerHTML = "";
//     }
// };

// submit.addEventListener('click', formValidation);

