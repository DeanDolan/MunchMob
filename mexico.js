// Perform function when check menu hit
function loadMexican() {
    // Fetch the JSON file
    fetch('Food.json')
        .then(response => response.json()) //  Parse JSON data
        .then(data => {
            // display information for Mexican restaurant
            const mexicanRestaurant = data.mexican;
            displayMexicanInfo(mexicanRestaurant);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayMexicanInfo(mexicanRestaurant) {
    const outputElement = document.getElementById('output');

    // Clear previous content
    outputElement.innerHTML = '';

    // Display restaurant type and details
    outputElement.innerHTML += `<h2>Mexican Restaurant</h2>`;
    if (mexicanRestaurant.details) {
        outputElement.innerHTML += `<p>Type: ${mexicanRestaurant.type}</p>`;
        outputElement.innerHTML += `<p>Distance: ${mexicanRestaurant.details.distance || 'Not available'}</p>`;
        outputElement.innerHTML += `<p>Location: ${mexicanRestaurant.details.location || 'Not available'}</p>`;
        outputElement.innerHTML += `<p>Delivery Cost: ${mexicanRestaurant.details.delivery || 'Not available'}</p>`;
    } else {
        outputElement.innerHTML += `<p>Details not available</p>`;
    }

    // Display menu
    outputElement.innerHTML += '<h3>Menu</h3>';
    if (mexicanRestaurant.menu) {
        // Sort categories alphabetically
        const sortedCategories = Object.keys(mexicanRestaurant.menu).sort();
        sortedCategories.forEach(category => {
            const items = mexicanRestaurant.menu[category];

            outputElement.innerHTML += `<div class="menu-category"><h4>${category}</h4>`;

            // Check if items is an array before trying to iterate
            if (Array.isArray(items)) {
                // Sort items alphabetically by item name
                items.sort((a, b) => a[0].localeCompare(b[0])).forEach(item => {
                    const itemName = item[0] || 'Unknown Item';
                    const imagePath = `./images/${itemName.toLowerCase()}.jpeg`;
                    outputElement.innerHTML += `<div class="menu-item">
                        <img src="${imagePath}" alt="${itemName}">
                        <p>${itemName}: $${item[1]}</p>
                    </div>`;
                });
            } else {
                const itemName = items[0] || 'Unknown Item';
                const imagePath = `./images/${itemName.toLowerCase()}.jpeg`;
                outputElement.innerHTML += `<div class="menu-item">
                    <img src="${imagePath}" alt="${itemName}">
                    <p>${itemName}: $${items[1]}</p>
                </div>`;
            }

            outputElement.innerHTML += `</div>`;
        });
    }

    // Show the menu container
    outputElement.style.display = 'block';
}
