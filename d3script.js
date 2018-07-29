
function disableButtonsWhite(){
    d3.select("#black").remove();
    d3.select("#hispanic").remove();
    d3.select("#asian").remove();
    d3.select("#white").attr("onclick", "");
    d3.select("#option").append("img").attr("src","refresh.png").attr("onclick", "window.location.reload()")
	    .style("width", "50px").style("height","50px");
}

function disableButtonsBlack(){
    d3.select("#white").remove();
    d3.select("#hispanic").remove();
    d3.select("#asian").remove();
    d3.select("#black").attr("onclick", "");
    d3.select("#option").append("img").attr("src","refresh.png").attr("onclick", "window.location.reload()")
	.style("width", "50px").style("height","50px");
}

function disableButtonsHispanic(){
    d3.select("#white").remove();
    d3.select("#asian").remove();
    d3.select("#black").remove();
    d3.select("#hispanic").attr("onclick", "");
    d3.select("#option").append("img").attr("src","refresh.png").attr("onclick", "window.location.reload()")
	.style("width", "50px").style("height","50px");
}

function disableButtonsAsian(){
    d3.select("#white").remove();
    d3.select("#hispanic").remove();
    d3.select("#black").remove();
    d3.select("#asian").attr("onclick", "");
    d3.select("#option").append("img").attr("src","refresh.png").attr("onclick", "window.location.reload()")
	.style("width", "50px").style("height","50px");
}










// The Pie Charts for Pullover Reason

function pieChartWhite(){
    var elmnt = document.getElementById("pieChart");
    elmnt.scrollIntoView();
    
    d3.select("#pieChart").append("p").text("As a white person, you were most likely pulled over for Speeding, which you are 28% more likely to be doing then the average person. You are most likely between the ages of 35-37 and male. Inspect the pie chart for your race (left) and the average person (right) to learn more about the types of offenses you are likely to be pulled over for").style("text-position", "left");
    
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Test",
			"fontSize": 50,
			"font": "courier",
            "margin": 555,
            "color": "white"
		},
		"subtitle": {
			"text": "White - Why were you pulled over?",
			"color": "#blue",
			"fontSize": 20,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 900,
        "canvasHeight": 900,
		"pieInnerRadius": "83%",
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Safe Movement",
				"value": 6.57,
				"color": "#ae83d5"
			},
			{
				"label": "Speeding",
				"value": 51.7,
				"color": "#3f4595"
			},
			{
				"label": "License",
				"value": 1.48,
				"color": "#c53030"
			},
			{
				"label": "Seat belt",
				"value": 1.87,
				"color": "#e1fbef"
			},
			{
				"label": "Equipment",
				"value": 22.17,
				"color": "#90e62f"
			},
			{
				"label": "Moving Violation",
				"value": 12.61,
				"color": "#b6205a"
			},
			{
				"label": "Registration/Plates",
				"value": 1.93,
				"color": "#bba4a4"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});
}

function pieChartBlack(){
    var elmnt = document.getElementById("pieChart");
    elmnt.scrollIntoView();
    
    d3.select("#pieChart").append("p").text("As a black person, you were most likely pulled over for Speeding, which you are 5% less likely to be doing then the average person. You are most likely between the ages of 33-36 and male. Inspect the pie chart for your race (left) and the average person (right) to learn more about the types of offenses you are likely to be pulled over for.").style("text-position", "left");
    
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "TEST",
			"fontSize": 34,
			"font": "courier",
            "color": "white"
		},
		"subtitle": {
			"text": "Black - Why were you pulled over?",
			"color": "#blue",
			"fontSize": 20,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "* Remaining % recorded as other",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 900,
        "canvasHeight": 900,
		"pieInnerRadius": "83%",
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Safe Movement",
				"value": 9.18,
				"color": "#ae83d5"
			},
			{
				"label": "Speeding",
				"value": 44.67,
				"color": "#3f4595"
			},
			{
				"label": "License",
				"value": 2.83,
				"color": "#c53030"
			},
			{
				"label": "Seat belt",
				"value": 1.53,
				"color": "#e1fbef"
			},
			{
				"label": "Equipment",
				"value": 21.31,
				"color": "#90e62f"
			},
			{
				"label": "Moving Violation",
				"value": 16.06,
				"color": "#b6205a"
			},
			{
				"label": "Registration/Plates",
				"value": 3.24,
				"color": "#bba4a4"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});
}

function pieChartHispanic(){
    
    var elmnt = document.getElementById("pieChart");
    elmnt.scrollIntoView();
    
    d3.select("#pieChart").append("p").text("As a hispanic person, you were most likely pulled over for Speeding, which you are 10% less likely to be doing then the average person. You are most likely between the ages of 33-35 and male. Inspect the pie chart for your race (left) and the average person (right) to learn more about the types of offenses you are likely to be pulled over for. ").style("text-position", "left");
    
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "TEST",
			"fontSize": 34,
			"font": "courier",
            "color": "white"
		},
		"subtitle": {
			"text": "Hispanic - Why were you pulled over?",
			"color": "#blue",
			"fontSize": 20,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "* Remaining % recorded as other",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 900,
        "canvasHeight": 900,
		"pieInnerRadius": "83%",
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Safe Movement",
				"value": 9.94,
				"color": "#ae83d5"
			},
			{
				"label": "Speeding",
				"value": 39.69,
				"color": "#3f4595"
			},
			{
				"label": "License",
				"value": 2.24,
				"color": "#c53030"
			},
			{
				"label": "Seat belt",
				"value": 1.52,
				"color": "#e1fbef"
			},
			{
				"label": "Equipment",
				"value": 21.91,
				"color": "#90e62f"
			},
			{
				"label": "Moving Violation",
				"value": 18.91,
				"color": "#b6205a"
			},
			{
				"label": "Registration/Plates",
				"value": 2.7,
				"color": "#bba4a4"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});
}

function pieChartAsian(){
    var elmnt = document.getElementById("pieChart");
    elmnt.scrollIntoView();
    
   d3.select("#pieChart").append("p").text("As an asian person, you were most likely pulled over for Speeding, which you are 11% more likely to be doing then the average person. You are most likely between the ages of 34-36 and male. Inspect the pie chart for your race (left) and the average person (right) to learn more about the types of offenses you are likely to be pulled over for.").style("text-position", "left");
    
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "TEST",
			"fontSize": 34,
			"font": "courier",
            "color": "white"
		},
		"subtitle": {
			"text": "Asian - Why were you pulled over?",
			"color": "#blue",
			"fontSize": 20,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "* Remaining % recorded as other",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 900,
        "canvasHeight": 900,
		"pieInnerRadius": "83%",
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Safe Movement",
				"value": 6.57,
				"color": "#ae83d5"
			},
			{
				"label": "Speeding",
				"value": 51.7,
				"color": "#3f4595"
			},
			{
				"label": "License",
				"value": 1.48,
				"color": "#c53030"
			},
			{
				"label": "Seat belt",
				"value": 1.87,
				"color": "#e1fbef"
			},
			{
				"label": "Equipment",
				"value": 22.17,
				"color": "#90e62f"
			},
			{
				"label": "Moving Violation",
				"value": 12.61,
				"color": "#b6205a"
			},
			{
				"label": "Registration/Plates",
				"value": 1.93,
				"color": "#bba4a4"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});
}

function pieChartAverage(){
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "",
			"fontSize": 34,
			"font": "courier"
		},
		"subtitle": {
			"text": "Average - Why were you pulled over?",
			"color": "black",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "* Remaining % recorded as other",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 600,
        "canvasHeight": 900,
		"pieInnerRadius": "83%",
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Safe Movement",
				"value": 2,
				"color": "#ccb2b2"
			},
			{
				"label": "Speeding",
				"value": 10,
				"color": "#ccc8b2"
			},
			{
				"label": "License",
				"value": 8,
				"color": "#c3ccb2"
			},
			{
				"label": "Seat Belt",
				"value": 8,
				"color": "#b5ccb2"
			},
			{
				"label": "Equipment",
				"value": 5,
				"color": "#b2ccbb"
			},
			{
				"label": "Moving Violation",
				"value": 3,
				"color": "#b2ccc8"
			},
			{
				"label": "Registration/Plates",
				"value": 4,
				"color": "#b2c2cc"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});
};



// The Bar Graphs for Search Type


var tooltip = d3.select("body").append("div").attr("class", "toolTip");


function generateWhiteGraph(){
    
       d3.select("#searched").append("h4").text(
       "The average probability of being searched is 0.04. You have a 0.02 probability of being searched."
       );
    
       d3.select("#searched").append("p").text("As a white person, you are most likely to be searched as an incident to arrest. Compared to average, you are 2% more likely to consent to a search and 0.5% less likely to be searched based on reasonable suspicion by the officer. Hover over the bars to see the average for that search type over all races.").style("text-position","left")
    
    
       var data = [{
                "name": "Incident to Arrest",
                "value": 0.46,
                "average": 0.47
        },
            {
                "name": "Consent",
                "value": 0.18,
                "average": 0.16
        },
            {
                "name": "Reasonable Suspicion",
                "value": 0.02,
                "average": 0.02
        },
            {
                "name": "K9 Search",
                "value": 0.01,
                "average": 0.01
        },
            {
                "name": "Probable Cause",
                "value": 0.11,
                "average": 0.11
        }];

        //sort bars based on value
        data = data.sort(function (a, b) {
            return d3.ascending(a.value, b.value);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 105,
            bottom: 15,
            left: 20
        };

        var width = 1300 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#searched").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width-200])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));

        //make y axis to show bar names
        var yAxis = d3.svg.axis().scale(y)

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g");
        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 200)
            .style("opacity", 0.5)
            .attr("width", function (d) {
                return x(d.value);
            })
            .on("mouseover", function(d){
            
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.name) + "<br>" + "Average: " + (d.average))
            ;
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");})

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.value) + 200;
            })
            .text(function (d) {
                return d.value;
            });
    
       bars.append("text")
            .attr("class", "below")
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            .attr("x", 10)
            .text(function(d) { return d.name;})
            .style("fill", "black");
    
       svg.call(yAxis);
    
    
}

function generateBlackGraph(){
    
        d3.select("#searched").append("h4").text(
       "The average probability of being searched is 0.04. You have a 0.08 probability of being searched."
       );
    
        d3.select("#searched").append("p").text("As a black person, you are most likely to be searched as an incident to arrest. Compared to average, you are 5% less likely to consent to a search and 0.1% more likely to be searched based on reasonable suspicion by the officer. Hover over the bars to see the average for that search type over all races.").style("text-position","left")
    
       var data = [{
                "name": "Incident to Arrest",
                "value": 0.47,
                "average": 0.47
        },
            {
                "name": "Consent",
                "value": 0.11,
                "average": 0.16
        },
            {
                "name": "Reasonable Suspicion",
                "value": 0.02,
                "average": 0.02
        },
            {
                "name": "K9 Search",
                "value": 0.01,
                "average": 0.01
        },
            {
                "name": "Probable Cause",
                "value": 0.13,
                "average": 0.11
        }];

        //sort bars based on value
        data = data.sort(function (a, b) {
            return d3.ascending(a.value, b.value);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 105,
            bottom: 15,
            left: 20
        };

        var width = 1260 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#searched").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width-200])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));

        //make y axis to show bar names
        var yAxis = d3.svg.axis().scale(y)

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g");

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 200)
            .style("opacity", 0.5)
            .attr("width", function (d) {
                return x(d.value);
            })
                       .on("mouseover", function(d){
            
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.name) + "<br>" + "Average: " + (d.average))
            ;
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.value) + 200;
            })
            .text(function (d) {
                return d.value;
            });
    
       bars.append("text")
            .attr("class", "below")
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            .attr("x", 10)
            .text(function(d) { return d.name; })
            .style("fill", "black");
    
       svg.call(yAxis);
}

function generateHispanicGraph(){
           d3.select("#searched").append("h4").text(
       "The average probability of being searched is 0.04. You have a 0.08 probability of being searched."
       );
    
    d3.select("#searched").append("p").text("As a hispanic person, you are most likely to be searched as an incident to arrest. Compared to average, you are 0.4% less likely to consent to a search and 0.3% more likely to be searched based on reasonable suspicion by the officer. Hover over the bars to see the average for that search type over all races.").style("text-position","left")
    
    
       var data = [{
                "name": "Incident to Arrest",
                "value": 0.52,
                "average": 0.47
        },
            {
                "name": "Consent",
                "value": 0.16,
                "average": 0.16
        },
            {
                "name": "Reasonable Suspicion",
                "value": 0.02,
                "average": 0.02
        },
            {
                "name": "K9 Search",
                "value": 0.008,
                "average": 0.01
        },
            {
                "name": "Probable Cause",
                "value": 0.08,
                "average": 0.11
        }];

        //sort bars based on value
        data = data.sort(function (a, b) {
            return d3.ascending(a.value, b.value);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 105,
            bottom: 15,
            left: 20
        };

        var width = 1260 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#searched").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width-200])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));

        //make y axis to show bar names
        var yAxis = d3.svg.axis().scale(y)

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g");

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 200)
            .style("opacity", 0.5)
            .attr("width", function (d) {
                return x(d.value);
            })
               .on("mouseover", function(d){
            
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.name) + "<br>" + "Average: " + (d.average))
            ;
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.value) + 200;
            })
            .text(function (d) {
                return d.value;
            });
    
       bars.append("text")
            .attr("class", "below")
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            .attr("x", 10)
            .text(function(d) { return d.name; })
            .style("fill", "black");
    
       svg.call(yAxis);
}

function generateAsianGraph(){
           d3.select("#searched").append("h4").text(
       "The average probability of being searched is 0.04. You have a 0.02 probability of being searched."
       );
    
    d3.select("#searched").append("p").text("As an asian person, you are most likely to be searched as an incident to arrest. Compared to average, you are 8% more likely to consent to a search and 0% more likely to be searched based on reasonable suspicion by the officer. Hover over the bars to see the average for that search type over all races.").style("text-position","left")
    
       var data = [{
                "name": "Incident to Arrest",
                "value": 0.42,
                "average": 0.47
        },
            {
                "name": "Consent",
                "value": 0.24,
                "average": 0.16
        },
            {
                "name": "Reasonable Suspicion",
                "value": 0.02,
                "average": 0.02
        },
            {
                "name": "K9 Search",
                "value": 0.01,
                "average": 0.01
        },
            {
                "name": "Probable Cause",
                "value": 0.09,
                "average": 0.11
        }];

        //sort bars based on value
        data = data.sort(function (a, b) {
            return d3.ascending(a.value, b.value);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 105,
            bottom: 15,
            left: 20
        };

        var width = 1260 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#searched").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width-200])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));

        //make y axis to show bar names
        var yAxis = d3.svg.axis().scale(y)

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g");

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 200)
            .style("opacity", 0.5)
            .attr("width", function (d) {
                return x(d.value);
            })
               .on("mouseover", function(d){
            
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.name) + "<br>" + "Average: " + (d.average))
            ;
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.value) + 200;
            })
            .text(function (d) {
                return d.value;
            });
    
       bars.append("text")
            .attr("class", "below")
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            .attr("x", 10)
            .text(function(d) { return d.name; })
            .style("fill", "black");
    
       svg.call(yAxis);
}

function generateAverageGraph(){
       var data = [{
                "name": "Incident to Arrest",
                "value": 10,
                "average": 5
        },
            {
                "name": "Consent",
                "value": 5,
                "average": 5
        },
            {
                "name": "Reasonable Suspicion",
                "value": 6,
                "average": 5
        },
            {
                "name": "K9 Search",
                "value": 10,
                "average": 5
        },
            {
                "name": "Probable Cause",
                "value": 13,
                "average": 5
        }];

        //sort bars based on value
        data = data.sort(function (a, b) {
            return d3.ascending(a.value, b.value);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 25,
            bottom: 15,
            left: 20
        };

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#searched").select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));

        //make y axis to show bar names
        var yAxis = d3.svg.axis().scale(y)

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g");
    
        var bars2 = svg.selectAll(".bar").data(data).enter().append("g")
        
        bars2.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 0)
            .style("opacity", 1)
            .style("fill", "orange")
            .attr("width", function (d) {
                return x(d.average);
            });

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 0)
            .style("opacity", 0.5)
            .style("fill", "orange")
            .attr("width", function (d) {
                return x(d.value);
            });

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.value) + 5;
            })
            .text(function (d) {
                return d.value;
            });
    
       bars.append("text")
            .attr("class", "below")
            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })
            .attr("x", 10)
            .text(function(d) { return d.name; })
            .style("fill", "white");
    
       svg.call(yAxis);
}


// The Contraband Infographic for Correct Search Rate

function contrabandBlack(){
    d3.select("#contraband").append("img").attr("src", "contraband_black.png");
    
    d3.select("#contraband").append("p").text("This is 3.1% less accuracy then average");
}

function contrabandWhite(){
    d3.select("#contraband").append("img").attr("src", "contraband_white.png");
    
    d3.select("#contraband").append("p").text("This is 4% more accuracy then average");
}

function contrabandAsian(){
    d3.select("#contraband").append("img").attr("src", "contraband_asian.png");
    
    d3.select("#contraband").append("p").text("This is 10% less accuracy then average");
}

function contrabandHispanic(){
    d3.select("#contraband").append("img").attr("src", "contraband_hispanic.png");
    
    d3.select("#contraband").append("p").text("This is 7% less accuracy then average");
}
