var dataseries = [
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
	    	heading: 'Record count',
	    	headingspan: 3,
	    	subheading: 'Last 24 hours',
	    	leftmargin: 10,
	    	type: 'text',
			'width': 100,
			'height': 30,
	    	data: function(d) {return d.count;}
	    },
	    {
	    	subheading: 'Rel to avg',
	    	leftmargin: 10,
	    	type: 'text',
			'width': 100,
			'height': 30,
	    	data: function(d) {return d.rel;}
	    },
	    {
	    	subheading: 'Last 4 weeks',
	    	leftmargin: 10,
	    	type: 'sparkline',
			'width': 150,
			'height': 30,
	    	data: function(d) {return d.history;}
	    },
	    ];