// from data.js
var tableData = data;
var datetime = [];
var city = [];
var state = [];
var country = [];
var shape = [];

// YOUR CODE HERE!
var tbody = d3.select("tbody");

showData(data);


function showData(ufosightings) {
  d3.selectAll('select').html('');
  tbody.html('');
  ufosightings.forEach((obj) => {
    var row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      if (key == 'datetime') {
        if (!datetime.includes(value)) {
          datetime.push(value)
          d3.select('#datetime').append('option').text(value);
        };
      };
      if (key == 'city') {
        if (!city.includes(value)) {
          city.push(value)
          d3.select('#city').append('option').text(value);
        };
      };
      if (key == 'state') {
        if (!state.includes(value)) {
          state.push(value)
          d3.select('#state').append('option').text(value);
        };
      };
      if (key == 'country') {
        if (!country.includes(value)) {
          country.push(value)
          d3.select('#country').append('option').text(value);
        };
      };
      if (key == 'shape') {
        if (!shape.includes(value)) {
          shape.push(value)
          d3.select('#shape').append('option').text(value);
        };
      };
    });
  });
};
// add IF statement for #datetime; if user input == data in Date column of data.js, display that row

// Select the button
var button = d3.select("button");

// Create event handlers for clicking the button or pressing the enter key
// button.on("click", searchUFO);
d3.selectAll('select').on('change', handleChange);

var filteredData = data;

function handleChange() {
  var key = d3.select(this).node().id;
  var val = d3.select(this).node().value;
  console.log(filteredData)
  filteredData = filteredData.filter(obj => obj[key] == val);
  showData(filteredData);
}
// Select the input element and get the raw HTML node

/// create a filter function to use inside the searchUFO function
// function basicFilter(ufo) {
//     return ufo.datetime == inputElement;
//   }


// Create the function to search and filter date search of ufo sightings
// function searchUFO() {
//   var inputElement = d3.select("#datetime").node().value;
//   // var filteredData = data.filter(sighting => sighting.datetime === inputElement);
//   console.log(inputElement)
//   showData(filteredData);
// };

  // console.log(tableData)
  // console.log(filteredData) 