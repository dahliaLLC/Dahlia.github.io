function selectStack(infileObj, containerDiv){ 
  var r0 = d3.select('input[name="stacked"]:checked').node().value;
  stackedArea(infileObj[r0], containerDiv);
  d3.selectAll('input[name="stacked"]').on("change", change);
  function change(){
    var radio = d3.select('input[name="stacked"]:checked').node().value;
    console.log(radio);
    stackedArea(infileObj[radio], containerDiv); 
  }

  function stackedArea(infile, containerDiv){
    d3.json(infile, function(data) {
      var chart = nv.models.stackedAreaChart()
                    .margin({right: 100})
                    .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                    .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                    .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                    .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
                    .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                    .clipEdge(true);
      var margin = {top: 20, right: 10, bottom: 20, left: 10};
      var width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;
      //Format x-axis labels with custom function.
      chart.xAxis
          .tickFormat(function(d) { 
            return d3.time.format('%x')(new Date(d)) 
      });

      chart.yAxis
           .tickFormat(d3.format(',.2f'));

      d3.select('#horizonGraph')
        .datum(data)
        .attr('width', width)
        .attr('height', height)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  };
}