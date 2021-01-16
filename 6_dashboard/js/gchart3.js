      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Testing' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'GlobalScot', 'GlobalScot Rnd 2',new Date(2020, 4, 30), new Date(2020, 6, 4) ],
          [ 'GlobalScot', 'GlobalScot Rnd 3',new Date(2020, 6, 30), new Date(2020, 8, 30) ],
          [ 'P2P','P2P Rnd-1' ,      new Date(2020, 9, 1),  new Date(2020, 11, 1) ],
          [ 'FBS', 'FBS round 15',   new Date(2020, 6, 4),  new Date(2020, 7, 1) ],
          [ 'FBS', 'FBS round 16',   new Date(2020, 7, 4),  new Date(2020, 8, 1) ],
          [ 'FBS', 'FBS round 17',   new Date(2020, 8, 14),  new Date(2020, 9, 1) ],
          [ 'FBS', 'FBS round 18',   new Date(2020, 9, 4),  new Date(2020, 10, 1) ],
          [ 'FBS', 'FBS round 19',   new Date(2020, 10, 4),  new Date(2020, 11, 1) ],
          [ 'Events', 'Scot Export', new Date(2020, 9, 5),  new Date(2020, 10, 8) ],
          [ 'Holidays', 'Christmas', new Date(2020, 11, 21),  new Date(2021, 0, 4) ]]);


////////
///////
//https://docs.google.com/spreadsheets/d/1cf6Mv6vEtlBDLN5u0tD_PfeOIbYaD45qFSC00qxm2TA/edit#gid=0








    var options = {
    };
    chart.draw(dataTable, options);
}
