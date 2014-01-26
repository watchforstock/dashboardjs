var analyticsseries = [
	    {
	    	leftmargin: 10,
	    	type: 'text',
			'width': 100,
			'height': 30,
	    	data: function(d) {return d.title;}
	    },
	    {
	    	leftmargin: 10,
	    	type: 'marker',
			'width': 30,
			'height': 30,
	    	data: function(d) {return d.warn;}
	    },
	    {
	    	heading: 'Alerts raised',
	    	headingspan: 3,
	    	subheading: 'Last 4 weeks',
	    	leftmargin: 20,
	    	type: 'sparkline',
			'width': 150,
			'height': 30,
	    	data: function(d) {return d.history;}
	    },
	    {
	    	subheading: 'Last 24 hours',
	    	subheadingspan: 2,
	    	leftmargin: 10,
	    	type: 'bar',
			'width': 150,
			'height': 30,
	    	data: function(d) {return {value: d.raised};},
	    	max: 150
	    },
	    {
	    	leftmargin: 10,
	    	type: 'text',
			'width': 50,
			'height': 30,
	    	data: function(d) {return d.raised;},
	    },
	    {
	    	heading: 'False positive rate',
	    	headingspan: 2,
	    	subheading: 'Last 7 days',
	    	leftmargin: 10,
	    	type: 'circleplot',
			'width': 150,
			'height': 30,
	    	data: function(d) {return d.previous;}
	    },
	    {
	    	leftmargin: 10,
	    	subheading: 'Now',
	    	type: 'text',
			'width': 50,
			'height': 30,
	    	data: function(d) {return '82%';}
	    },
	    {
	    	heading: 'Run time',
	    	headingspan: 3,
	    	subheading: 'Last 4 weeks',
	    	leftmargin: 20,
	    	type: 'sparkline',
			'width': 150,
			'height': 30,
	    	data: function(d) {return d.history;}
	    },
	    {
	    	subheading: 'Last 24 hours',
	    	subheadingspan:2,
	    	leftmargin: 10,
	    	type: 'bar',
			'width': 150,
			'height': 30,
	    	data: function(d) {return d.bar;},
	    	max: 100
	    },
	    {
	    	leftmargin: 10,
	    	type: 'text',
			'width': 70,
			'height': 30,
	    	data: function(d) {return '5 mins';}
	    }
	];
