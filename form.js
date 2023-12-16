/* This page was done entirely by Dean Dolan */

/*author@Dean.Dolan
*form.js
*29/11/2023
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Loaded!");
    var signUpForm = document.getElementById('signUp');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Thank you " + firstName + ", we will be in touch shortly!");

            // Getting form values
            var firstNameInput = document.getElementById('firstName');
            var lastNameInput = document.getElementById('lastName');
            var emailInput = document.getElementById('emailInput');
            var phoneInput = document.getElementById('phoneInput');
            var formMessage = document.getElementById('formMessage');
			formMessage.style.color = 'white';
			var formError = document.getElementById('formError');
			formError.style.color = 'red';
            // Custom error messages
            if (!firstNameInput.checkValidity()) {
                formError.innerHTML = 'Please enter a valid first name (letters only, max 20 characters).';
                event.preventDefault();
                return;
            }

            if (!lastNameInput.checkValidity()) {
                formError.innerHTML = 'Please enter a valid last name (letters only, max 20 characters).';
                event.preventDefault();
                return;
            }

            if (!emailInput.checkValidity()) {
                formError.innerHTML = 'Please enter a valid email address.';
                event.preventDefault();
                return;
            }

            if (!phoneInput.checkValidity()) {
                formError.innerHTML = 'Please enter a valid phone number (must be 10 digits only).';
                event.preventDefault();
                return;
            }

            // Success message
            var formName = firstNameInput.value;
            formMessage.innerHTML = "Thanks " + formName + " for submitting! We'll be in touch shortly.";
            formMessage.style.display = 'block';
			formError.style.display = 'block';
            signUpForm.reset();
			formError.innerHTML = '';
            formError.style.display = 'none';
        });
    } else {
        console.log("There is an error!");
    }
});

// https://www.w3schools.com/jsref/met_document_queryselector.asp
function filterList() {
    const filterValue = document.getElementById('myInput').value.toUpperCase();
    const list = document.getElementById('myList');

    if (filterValue.trim() !== '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }

    const items = document.querySelectorAll('#myList li');
    items.forEach(item => {
        const anchor = item.querySelector('a');
        const txtValue = anchor.textContent || anchor.innerText;
        if (txtValue.toUpperCase().indexOf(filterValue) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}


