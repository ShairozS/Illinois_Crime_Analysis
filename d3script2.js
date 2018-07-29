searchRates = [0.10,0.20,0.23,0.05];
race = ['black', 'white', 'hispanic', 'asian']

var margin = 40;
var width = 400;
var height = 300;
var data = [0.10,0.20,0.23,0.05];
var x = d3.scale.ordinal().domain(["black", "white", "hispanic", "asian"]).rangeBands([0,width]);
var y = d3.scale.linear().domain([0,1]).range([height,0]);
var barWidth = String((width/data.length)-2*margin + 40)
var padding = 100;
var chart = d3.select("#chart2");
chart.attr("width",width + 2*margin)
    .attr("height",height + 2*margin).attr("x", "500")
    .append("g")
        .attr("transform","translate(" + margin + "," + margin + ")")
    .selectAll("rect")
	.data(data)
    .enter().append("rect")
                .attr("width",barWidth)
                .attr("x",function(d,i) { return ((i*100)+20);})
                .attr("fill", "steelblue")
                .attr("height", 0)
                .attr("y", height)
                .transition().duration(2000)
                .attr("y",function(d) { return y(d); })
                .attr("height",function(d) { return height - y(d); })
                ;
var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(4).tickSize(2);
var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5).tickSize(2);

chart.append("g")
    .attr("transform", "translate(" + margin + "," + (height+margin) + ")")
    .attr("class","axis")
    .call(xAxis);
    
chart.append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")")
    .attr("class","axis")
    .call(yAxis);