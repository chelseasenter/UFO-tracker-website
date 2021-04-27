showData(data);

function showData(data) {
  d3.select('tbody').html('');
  data.forEach(obj => {
    var row = d3.select('tbody').append('tr');
    Object.values(obj).forEach(val=> row.append('td').text(val))
  });
};

d3.select('button').on('click',handleClick);

function handleClick() {
  var val = d3.select('input').node().value;
  var filtered = data.filter(obj=>obj.datetime==val);
  showData(filtered);
};