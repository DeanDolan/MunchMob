/* This page was done entirely by Dean Dolan */

/*author@Dean.Dolan
*index.js + more-details.json
*29/11/2023
*/


function displayChineseData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var moreChinese = data.morechinese;
        displayChineseDetails(moreChinese);
		/*var button = document.getElementById('myButton');
        button.style.display = visible(false);*/
      } else {
        console.error('Error fetching JSON:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'more-details.json', true);
  xhr.send();
}

function displayChineseDetails(moreChinese) {
  var buttonElement = document.getElementById('myButtonDetails');

  // Clear previous content
  buttonElement.innerHTML = '';

  // Display details
  buttonElement.innerHTML += `<p>Min Order: €${moreChinese.minOrderAmount}</p>`;
  buttonElement.innerHTML += `<p>Delivery Charge: €${moreChinese.deliveryCharge}</p>`;
  buttonElement.innerHTML += `<p>Reviews: ${moreChinese.review}</p>`;
  buttonElement.innerHTML += `<p>Stars: ${moreChinese.stars}</p>`;
}

function displayChipperData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var moreChipper = data.morechipper;
        displayChipperDetails(moreChipper);
		/*var button = document.getElementById('myButton2');
        button.style.display = 'none'; */
      } else {
        console.error('Error fetching JSON:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'more-details.json', true);
  xhr.send();
}

function displayChipperDetails(moreChipper) {
  var button2Element = document.getElementById('myButton2Details');

  // Clear previous content
  button2Element.innerHTML = '';

  // Display details
  button2Element.innerHTML += `<p>Min Order: €${moreChipper.minOrderAmount}</p>`;
  button2Element.innerHTML += `<p>Delivery Charge: €${moreChipper.deliveryCharge}</p>`;
  button2Element.innerHTML += `<p>Reviews: ${moreChipper.review}</p>`;
  button2Element.innerHTML += `<p>Stars: ${moreChipper.stars}</p>`;
}

function displayJapaneseData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var moreJapanese = data.morejapanese;
        displayJapaneseDetails(moreJapanese);
		/*var button = document.getElementById('myButton3');
        button.style.display = 'none'; */
      } else {
        console.error('Error fetching JSON:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'more-details.json', true);
  xhr.send();
}

function displayJapaneseDetails(moreJapanese) {
  var button3Element = document.getElementById('myButton3Details');

  // Clear previous content
  button3Element.innerHTML = '';

  // Display details
  button3Element.innerHTML += `<p>Min Order: €${moreJapanese.minOrderAmount}</p>`;
  button3Element.innerHTML += `<p>Delivery Charge: €${moreJapanese.deliveryCharge}</p>`;
  button3Element.innerHTML += `<p>Reviews: ${moreJapanese.review}</p>`;
  button3Element.innerHTML += `<p>Stars: ${moreJapanese.stars}</p>`;
}

function displayPizzaData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var morePizza = data.morepizza;
        displayPizzaDetails(morePizza);
		/*var button = document.getElementById('myButton4');
        button.style.display = 'none'; */
      } else {
        console.error('Error fetching JSON:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'more-details.json', true);
  xhr.send();
}

function displayPizzaDetails(morePizza) {
  var button4Element = document.getElementById('myButton4Details');

  // Clear previous content
  button4Element.innerHTML = '';

  // Display details
  button4Element.innerHTML += `<p>Min Order: €${morePizza.minOrderAmount}</p>`;
  button4Element.innerHTML += `<p>Delivery Charge: €${morePizza.deliveryCharge}</p>`;
  button4Element.innerHTML += `<p>Reviews: ${morePizza.review}</p>`;
  button4Element.innerHTML += `<p>Stars: ${morePizza.stars}</p>`;
}

function displayMexicanData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var moreMexican = data.moremexican;
        displayMexicanDetails(moreMexican);
		/*var button = document.getElementById('myButton5');
        button.style.display = 'none'; */
      } else {
        console.error('Error fetching JSON:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'more-details.json', true);
  xhr.send();
}

function displayMexicanDetails(moreMexican) {
  var button5Element = document.getElementById('myButton5Details');

  // Clear previous content
  button5Element.innerHTML = '';

  // Display details
  button5Element.innerHTML += `<p>Min Order: €${moreMexican.minOrderAmount}</p>`;
  button5Element.innerHTML += `<p>Delivery Charge: €${moreMexican.deliveryCharge}</p>`;
  button5Element.innerHTML += `<p>Reviews: ${moreMexican.review}</p>`;
  button5Element.innerHTML += `<p>Stars: ${moreMexican.stars}</p>`;
}

//Terms of Service - https://www.youtube.com/watch?v=RVA4HoEE_q8
// Function to display the Terms of Service (TOS) popup
function showTos() {
  // Get the element with the id 'tos' (assumed to be the TOS popup)
  var tos = document.getElementById('tos');
  // Set the display style of the TOS popup to 'flex' to make it visible
  tos.style.display = 'flex';
}

// Function to hide the popup when terms are accepted
function acceptTerms() {
  // Get the element with the id 'tos' (assumed to be the TOS popup)
  var tos = document.getElementById('tos');
  // Set the display style of the TOS popup to 'none' to hide it
  tos.style.display = 'none'; 
}

// Show the popup when the page loads 
// Attach an anonymous function to the window.onload event
window.onload = function() {
  // Call the showTos function after a delay of 3000 milliseconds (3 seconds) when the page loads
  setTimeout(function() { // https://www.youtube.com/watch?v=RXWAZ0C_mds
    showTos();
  }, 3000); 
};


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

