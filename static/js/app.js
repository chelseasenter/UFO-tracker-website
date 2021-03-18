// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((ufosightings) => {
    var row = tbody.append("tr");
    Object.entries(ufosightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", searchUFO);

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

/// create a filter function to use inside the searchUFO function
function basicFilter(ufo) {
    return ufo.datetime == inputElement;
  }

// Create the function to search and filter date search of ufo sightings
function searchUFO(searchDate) {

  // Prevent the page from refreshing
//   d3.event.preventDefault();
  filteredTable = data.filter(basicFilter);

  return filteredTable
  };

  console.log(tableData)
  console.log(filteredTable) 