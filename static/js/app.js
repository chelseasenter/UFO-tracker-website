// from data.js
var tableData = data;
// var datetime = [];
// var city = [];
// var state = [];
// var country = [];
// var shape = [];

// YOUR CODE HERE!
var tbody = d3.select("tbody");

showData(data);

// Notes for Tuesday: 
// The 'if' statements are where everything starts to break down
// First pass, everything is good, dropdown list generated (see #2 or #3 before change)
// Second pass, nothing is added to dropdown lists (see #3 after change)
// AND datetime list does not change (see #2 after change)

// nested switch statements?

function showData(ufosightings) {
  datetime = [];
  city = [];
  state = [];
  country = [];
  shape = [];
  d3.selectAll('select').html('');
  tbody.html('');
  ufosightings.forEach((obj) => {
    // console.log("under forEach 1")
    var row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
      // console.log("under forEach 2")
      // #1 - showing the key and value forEach
      console.log([key, value])
      var cell = row.append("td");
      cell.text(value);
      if (key == 'datetime') {
        // #2 - shows each row iteration of datetime 
        console.log(datetime)
        if (!datetime.includes(value)) {
          datetime.push(value)
          // #3 - shows only the datetimes added (unique values) to dropdown list
          console.log("added:")
          console.log(datetime)
          console.log("end added.")
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
  console.log("ufosightings")
  console.log(ufosightings)
};


// showData(data);


// Select the button
var button = d3.select("button");

// Create event handlers for clicking the button or pressing the enter key
// button.on("click", searchUFO);
d3.selectAll('select').on('change', handleChange);

var filteredData = data;

function handleChange() {
  var key = d3.select(this).node().id;
  var val = d3.select(this).node().value;

  console.log(d3.select(this).node().id)
  console.log(d3.select(this).node().value)

  filteredData = filteredData.filter(obj => obj[key] == val);
  console.log("filteredData")
  console.log(filteredData)

  showData(filteredData);

}

d3.selectAll('button').on('change', resetSearch);

function resetSearch() {
  filteredData = data
  showData(filteredData);
  console.log("data reset")
}
// Select the input element and get the raw HTML node

/// create a filter function to use inside the searchUFO function
// function basicFilter(ufo) {
//     return ufo.datetime == inputElement;
//   }


// Create the function to search and filter date search of ufo sightings
// function searchUFO() {
//   var inputElement = d3.select("#datetime").node().value;
//   // var filteredData = data.filter(sighting => sighting.datetime == inputElement);
//   console.log(inputElement)
//   showData(filteredData);
// };

  // console.log(tableData)
  // console.log(filteredData) 
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log("--------- FULL RUN THROUGH --------")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")

