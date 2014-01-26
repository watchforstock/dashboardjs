// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
var data = [
    {
    	title: 'Analytic 1',
    	raised: 135,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 2,
    	bar: {value: 90, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 2',
    	raised: 100,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 1,
    	bar: {value: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 3',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 4',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 5',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 6',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 7',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 8',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 9',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
    {
    	title: 'Analytic 10',
    	raised: 90,
    	history: [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7],
    	warn: 0,
    	bar: {value: 20, vertical: 50},
    	bullet: {max: 100, value: 80, vertical: 60},
    	previous: {value: 80, circles: [10,20,30,90], max:100}
    },
];
		

	
	
	
	
