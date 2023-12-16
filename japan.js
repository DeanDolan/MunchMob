// Perform function when check menu hit
function loadJapanese() {
    //Fetch the JSON file
    fetch('Food.json')
        .then(response => response.json()) //  Parse JSON data
        .then(data => {
            //display information for Japanese restaurant
            const japaneseRestaurant = data.japanese;
            displayJapaneseInfo(japaneseRestaurant);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayJapaneseInfo(japaneseRestaurant) {
    const outputElement = document.getElementById('show');

    // Clear previous content
    outputElement.innerHTML = '';

    // Display restaurant type and details
    outputElement.innerHTML += `<h2>Japanese Restaurant</h2>`;
    if (japaneseRestaurant.details) {
        outputElement.innerHTML += `<p>Type: ${japaneseRestaurant.type}</p>`;
        outputElement.innerHTML += `<p>Distance: ${japaneseRestaurant.details.distance || 'Not available'}</p>`;
        outputElement.innerHTML += `<p>Location: ${japaneseRestaurant.details.location || 'Not available'}</p>`;
        outputElement.innerHTML += `<p>Delivery Cost: ${japaneseRestaurant.details.delivery || 'Not available'}</p>`;
    } else {
        outputElement.innerHTML += `<p>Details not available</p>`;
    }

    // Display menu
    outputElement.innerHTML += '<h3>Menu</h3>';
    if (japaneseRestaurant.menu) {
        // Sort categories alphabetically
        const sortedCategories = Object.keys(japaneseRestaurant.menu).sort();
        sortedCategories.forEach(category => {
            const items = japaneseRestaurant.menu[category];

            outputElement.innerHTML += `<div class="menu-category"><h4>${category}</h4>`;

            // Check if items is an array before trying to iterate
            if (Array.isArray(items)) {
                // Sort items alphabetically by item name
                items.sort((a, b) => a[0].localeCompare(b[0])).forEach(item => {
                    const itemName = item[0] || 'Unknown Item';
                    const imagePath = `./images/${itemName.toLowerCase()}.jpeg`;
                    outputElement.innerHTML += `<div class="menu-item">
                        <img src="${imagePath}" alt="${itemName}">
                        <p>${itemName}: €${item[1]}</p>
                    </div>`;
                });
            } else {
                const itemName = items[0] || 'Unknown Item';
                const imagePath = `./images/${itemName.toLowerCase()}.jpeg`;
                outputElement.innerHTML += `<div class="menu-item">
                    <img src="${imagePath}" alt="${itemName}">
                    <p>${itemName}: €${items[1]}</p>
                </div>`;
            }

            outputElement.innerHTML += `</div>`;
        });
    }

    // Show the menu container
    outputElement.style.display = 'block';
}
