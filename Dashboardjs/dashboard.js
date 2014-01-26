/* implementation of the sparkline heavily influenced by http://bl.ocks.org/1166403 */

	calcw = function(options) {
		var m = options.margins;
		return options.width - m[1] - m[3];
	};
	
	calch = function(options) {
		var m = options.margins;
		return options.height - m[0] - m[2]; // height		
	};
	
	buildsvg = function(options) {
		
		var m = options.margins;
		var w = calcw(options); // width
		var h = calch(options); // height		
		
		return options.svg.append("svg:svg")
	      .attr("width", w + m[1] + m[3])
	      .attr("height", h + m[0] + m[2])
	      .attr("x", options.xoffset)
	      .attr("y", options.yoffset)
	    .append("svg:g")
	      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
	};
	
	sparkline = function(options, data) {
 
		var w = calcw(options);
		var h = calch(options);
		
		// X scale will fit all values from data[] within pixels 0-w
		var x = d3.scale.linear().domain([0, data.length]).range([0, w]);
		// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
		var y = d3.scale.linear().domain([0, 10]).range([h, 0]);
			// automatically determining max range can work something like this
			// var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);
 
		// create a line function that can convert data[] into x and y points
		var line = d3.svg.line()
			// assign the X function to plot our line as we wish
			.x(function(d,i) { 
				// return the X coordinate where we want to plot this datapoint
				return x(i); 
			})
			.y(function(d) { 
				// return the Y coordinate where we want to plot this datapoint
				return y(d); 
			});
 
		// Add an SVG element with the desired dimensions and margin.
		//var graph = d3.select("#graph").append("svg:svg")
		var graph = buildsvg(options);
		
		graph.append("rect")
			.attr("class", "sparkline")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", options.width)
			.attr("height", options.height);
		
		// Add the line by appending an svg:path element with the data line we created above
		// do this AFTER the axes above so that the line is above the tick-lines
		graph.append("svg:path").attr("d", line(data));
	};

	bullet = function(options, data) {
		var w = calcw(options);
		var h = calch(options);

		var x = d3.scale.linear().domain([0, data.max]).range([0, w]);

		var graph = buildsvg(options);

		graph.append("rect")
		.attr("class", "bullet-background")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", options.width)
		.attr("height", options.height);
		
		drawvertical(graph, options, data, x);
		
		graph.append("rect")
	      .attr("class", "bullet-bar")
	      .attr("x", 0)
	      .attr("width", x(data.value))
	      .attr("y", h/2)
	      .attr("height", 4);
		
	};
	
	drawvertical = function(graph, options, data, scale) {
		if (data.vertical) {

			graph.append("line").attr("x1", scale(data.vertical))
							 .attr("x2", scale(data.vertical))
			                 .attr("y1", 2)
			                 .attr("y2", options.height-4)
			                 .attr("stroke-width", "2")
			                 .attr("stroke", "black")
			                 .attr("class", "bullet-vertical");
		}
		
	};
	
	circleplot = function(options, data) {
		var w = calcw(options);
		var h = calch(options);

		var x = d3.scale.linear().domain([0, data.max]).range([0, w]);

		var graph = buildsvg(options);

		graph.append("rect")
			.attr("class", "circleplot-background")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", options.width)
			.attr("height", options.height);
		
		for (var i=0; i<data.circles.length; ++i) {
			graph.append("circle").attr("cx", x(data.circles[i]))
				.attr("cy", h/2)
				.attr("r", h/4)
				.attr("class", "circleplot-marker")
				.attr("stroke-width", 1);
		}
		
		drawvertical(graph, options, {vertical: data.value}, x);
	};
	
	bar = function(options, data, overallsize) {

		var w = calcw(options);
		var h = calch(options);
		
		var x = d3.scale.linear().domain([0, overallsize]).range([0, w]);
		//var y = d3.scale.linear().domain([0, 10]).range([h, 0]);
		
		var graph = buildsvg(options);
		
		graph.append("rect")
	      .attr("class", "bar")
	      .attr("x", 0)
	      .attr("width", x(data.value))
	      .attr("y", 0)
	      .attr("height", h);
		
		drawvertical(graph, options, data, x);
	};

	marker = function(options, value) {
		// define dimensions of graph
		var h = calch(options); // height

		if (value == 0) {
			return;
		}
		
		var graph = buildsvg(options);
		
		graph.append("circle").attr("cx", h/2)
			.attr("cy", h/2)
			.attr("r", h/2)
			.attr("class", value == 1 ? "marker-partial" : "marker-full")
			.attr("stroke-width", 4);

	};

	line = function(options, clazz) {

		var graph = buildsvg(options);
		
		graph.append("line").attr("x1", 0)
						 .attr("x2", options.width)
		                 .attr("y1", options.height-10)
		                 .attr("y2", options.height-10)
		                 .attr("stroke-width", "2")
		                 .attr("stroke", "black")
		                 .attr("class", clazz);
	};

	
	text = function(options, value, clazz) {

		var graph = buildsvg(options);
		
		graph.append("text").attr("x", 0)
		                 .attr("y", "1.1em")
		                 .text( value)
		                 .attr("class", clazz)
		                 .attr("font-family", "sans-serif")
		                 .attr("font-size", "20px");
		                 //.attr("fill", "red");
	};
	
	dashboard = function(selector, width, height, data, series) {
	
		var svg = d3.select(selector).append("svg:svg")
			.attr("width", width)
			.attr("height", height);
		
		options = {
			'svg': svg,
			'margins': [2, 2, 2, 2],
			'xoffset': 10,
			'yoffset': 0,
		};

		var recordheight = 40;
		var yoffset = 10;
		
		// Set up xoffsets on all items
		var xoffset = 0;
		for (var j=0; j<series.length; ++j) {
			series[j].xoffset = xoffset + series[j].leftmargin;
			xoffset = series[j].xoffset + series[j].width; 
		}
		
		// Draw headings
		for (var j=0; j<series.length; ++j) {
			var seriesitem = series[j];

			var newoptions = {};

			for( var key in options)
			     newoptions[ key ] = options[ key ];
			
			if (seriesitem.heading) {
				newoptions.xoffset = seriesitem.xoffset;
				newoptions.yoffset = yoffset;
				newoptions.height = 40;
				
				var span = seriesitem.headingspan ? seriesitem.headingspan : 1;
				
				newoptions.width = (series[j+span-1].xoffset - series[j].xoffset) + series[j+span-1].width;
			
				text(newoptions, seriesitem.heading, 'heading');
				
				line(newoptions, 'headingline');
			}
		}

		yoffset += recordheight;

		// Draw sub headings
		for (var j=0; j<series.length; ++j) {
			var seriesitem = series[j];

			var newoptions = {};

			for( var key in options)
			     newoptions[ key ] = options[ key ];
			
			if (seriesitem.subheading) {
				newoptions.xoffset = seriesitem.xoffset;
				newoptions.yoffset = yoffset;
				newoptions.height = 40;
				
				newoptions.width = 0;
				for (var i=0; i< (seriesitem.subheadingspan ? seriesitem.subheadingspan : 1); ++i) {
					newoptions.width += series[j+i].width;
				}
				
				text(newoptions, seriesitem.subheading, 'subheading');
				line(newoptions, 'subheadingline');
			}
		}

		yoffset += recordheight;
		
		
		// Draw dashboard items
		for (var i = 0; i<data.length; ++i) {
			var datum = data[i];
			
			for (var j=0; j<series.length; ++j) {
				var seriesitem = series[j];
				
				plotitem(seriesitem, datum, options, yoffset);
			}
			
			yoffset += recordheight;
		};

	};
	
	plotitem = function(seriesitem, datum, options, yoffset) {
		var newoptions = {};

		for( var key in options) {
		     newoptions[ key ] = options[ key ];
		}
		
		// Set x position
		newoptions.xoffset = seriesitem.xoffset;
		newoptions.height = seriesitem.height;
		newoptions.width = seriesitem.width;
		
		newoptions.yoffset = yoffset;
		
		if (seriesitem.type == 'marker') {
			marker(newoptions, seriesitem.data(datum));
		} else if (seriesitem.type == 'bar') {
			bar(newoptions, seriesitem.data(datum), seriesitem.max);
			
		} else if (seriesitem.type == 'text') {
			text(newoptions, seriesitem.data(datum), '');
		} else if (seriesitem.type == 'bullet') {
			bullet(newoptions, seriesitem.data(datum));
		} else if (seriesitem.type == 'circleplot') {
			circleplot(newoptions, seriesitem.data(datum));
		} else if (seriesitem.type == 'sparkline') {
			sparkline(newoptions, seriesitem.data(datum));
		};
	};

	
