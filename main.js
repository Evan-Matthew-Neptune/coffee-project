"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<div class="m-3"><h2>' + coffee.name + '</h2></div>';
    html += '<div><p>' + coffee.roast + '</p></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; ++i) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    if (e !== undefined) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
    var searchInput = coffeeSearch.value;
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes(searchInput.toLowerCase()) && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if ((coffee.name.toLowerCase()).includes(searchInput.toLowerCase()) && selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function createCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var newCoffeeName = document.querySelector('#new-coffee-name').value;
    var newCoffeeRoast = document.querySelector('#new-coffee-roast').value;
    var newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName,
        roast: newCoffeeRoast
    }
    coffees.push(newCoffee);
    updateCoffees();
}

// var lightRoast = [];
// var medRoast = [];
// var darkRoast = [];
//
// function seperate() {
//     coffeesCopy.forEach(function (element) {
//         if (coffeesCopy.roast === "light") {
//             lightRoast.push(element);
//         }
//         else if (coffeesCopy.roast === "medium") {
//             medRoast.push(element);
//         }
//         else if (coffeesCopy.roast === "dark") {
//             darkRoast.push(element);
//         }
//     })
// }
// seperate();


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var coffeesCopy = coffees.slice();
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.getElementById('coffee-text');
var newCoffeeSubmit = document.querySelector('#new-coffee-button');


tbody.innerHTML = renderCoffees(coffees);

// Event listeners
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees);
newCoffeeSubmit.addEventListener('click', createCoffee);