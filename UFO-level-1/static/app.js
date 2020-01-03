
var sightings = data;

function insertResults(data) {
  var tbody = d3.select("tbody");
  tbody.html("");
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);  
    });
  });
}

function filterResults() {
  d3.event.preventDefault();
  var date = d3.select("#datetime").property("value");
  let filteredSightings = sightings;
  if (date) {
    filteredSightings = filteredSightings.filter(row => row.datetime === date);
  }
  insertResults(filteredSightings);
}

d3.selectAll("#button").on("click", filterResults);
