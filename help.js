/* This page was done entirely by Dean Dolan */

/*author@Dean.Dolan
*help.js
*29/11/2023
*/


function displayAnswer1(){
    var answer1Element = document.getElementById('answer1');
    answer1.style.display= 'block';
	answer1.style.color= 'red';
	answer1.style.fontWeight= 'bold';
	
    answer1Element.innerHTML = 'We maintain strict quality standards by partnering only with restaurants that prioritize freshness. Additionally, our delivery network is optimized for quick transportation to ensure your food arrives as fresh as possible.';
}

function displayAnswer2(){
    var answer2Element = document.getElementById('answer2');
    answer2.style.display= 'block';
	answer2.style.color= 'red';
	answer2.style.fontWeight= 'bold';
	
    answer2Element.innerHTML = 'We maintain strict quality standards by partnering only with restaurants that prioritize freshness. Additionally, our delivery network is optimized for quick transportation to ensure your food arrives as fresh as possible.';
}

function displayAnswer3(){
    var answer3Element = document.getElementById('answer3');
    answer3.style.display= 'block';
	answer3.style.color= 'red';
	answer3.style.fontWeight= 'bold';
	
    answer3Element.innerHTML = 'We believe in transparent pricing. There are no hidden fees; however, you may encounter standard delivery charges or minimum order requirements based on the restaurants policies.';
}

function displayAnswer4(){
    var answer4Element = document.getElementById('answer4');
    answer4.style.display= 'block';
	answer4.style.color= 'red';
	answer4.style.fontWeight= 'bold';
	
    answer4Element.innerHTML = 'To sign up as a courier, navigate to our "Become a Courier" page on our website or app. Follow the simple steps to register by providing your contact details, vehicle information (if applicable), and necessary documentation.';
}

function displayAnswer5(){
    var answer5Element = document.getElementById('answer5');
    answer5.style.display= 'block';
	answer5.style.color= 'red';
	answer5.style.fontWeight= 'bold';
	
    answer5Element.innerHTML = 'Yes, we offer flexible scheduling to accommodate your availability. Couriers can select shifts or operate on an on-demand basis, allowing for a balanced work-life routine.';
} 

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




