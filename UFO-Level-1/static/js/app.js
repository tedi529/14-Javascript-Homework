// Get a reference to the table body from data.js
let wholeData = data;

// Get a reference to the table body in index.html
let tbody = d3.select("tbody");

// Loop through data in javascript object to append to table body in index.html
let addTable = (dataInput) => {
    dataInput.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

addTable(wholeData);

// Create event on button click based on filtered data by value of input element

let button = d3.select("#filter-btn");

button.on("click", function() {
    let inputDate= d3.select("#datetime");
    let inputValue = inputDate.property("value");
    
    let searchData = wholeData.filter(instance => instance.datetime === inputValue);

    tbody.html("");

    if (searchData.length === 0) {
        tbody.append("tr").append("td").text("No Sightings on This Date... Try Again!")
    } else {
    addTable(searchData);
    }
});