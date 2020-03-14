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
    let inputDate = d3.select("#datetime");
    let inputdateValue = inputDate.property("value");

    let selectState = d3.select("#selState");
    let selectstateValue = selectState.property("value");
    
    let searchData = wholeData.filter(instance => instance.datetime === inputdateValue).filter(instance => instance.state === selectstateValue);

    tbody.html("");

    if (searchData.length === 0) {
        tbody.append("tr").append("td").text("No Sightings on This Date in This State... Try Again!")
    } else {
    addTable(searchData);
    }
});