      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

    //    dataTable.addColumn({ type: 'string', id: 'Testing' });
  //      dataTable.addColumn({ type: 'string', id: 'Name' });
    //    dataTable.addColumn({ type: 'date', id: 'Start' });
    //    dataTable.addColumn({ type: 'date', id: 'End' });
    //    dataTable.addRows([
      //    [ 'Brexit', 'Brexit Rnd 2',new Date(2018, 4, 30), new Date(2018, 6, 4) ],
      //    [ 'Brexit', 'Brexit Rnd 3',new Date(2018, 6, 30), new Date(2018, 8, 30) ],
      //    [ 'Scotgrad','Scotgrad Rnd-1' ,     new Date(2018, 9, 1),  new Date(2018, 11, 1) ],
      //    [ 'Talent Scotland', 'Talent Scotland', new Date(2018, 8, 4),  new Date(2018, 10, 4) ],
      //    [ 'Events', 'Scot Export', new Date(2018, 10, 5),  new Date(2018, 10, 8) ],
      //    [ 'Holidays', 'Easter', new Date(2018, 3, 21),  new Date(2018, 3, 30) ],
      //    [ 'Holidays', 'Christmas', new Date(2018, 11, 21),  new Date(2019, 0, 4) ]]);


////////
///////
//https://docs.google.com/spreadsheets/d/1cf6Mv6vEtlBDLN5u0tD_PfeOIbYaD45qFSC00qxm2TA/edit#gid=0

//////////
alert('creating query');
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1cf6Mv6vEtlBDLN5u0tD_PfeOIbYaD45qFSC00qxm2TA/edit?usp=sharing');
alert('setting query');
    // Apply query language statement.
    query.setQuery('SELECT *');
alert('sending query');
    // Send the query with a callback function.
    query.send(handleQueryResponse);


  function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    alert('getting table');
    var data = response.getDataTable();
    visualization = new google.visualization.LineChart(document.getElementById('timeline'));
    visualization.draw(data, {legend: 'bottom'});
  }






//////////


    var options = {
        timeline: { colorByRowLabel: true }
    };


    chart.draw(dataTable, options);
}
