// from data.js
var tableData = data;
// var datetime = [];


// YOUR CODE HERE!
var tbody = d3.select("tbody");

showData(data);


function showData(ufosightings) {
  d3.selectAll('select').html('');
  tbody.html('');
  ufosightings.forEach((obj) => {
    // console.log("under forEach 1")
    var row = tbody.append("tr");
      var cell = row.append("td");
      
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

