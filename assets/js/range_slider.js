var slider = document.getElementById('range');

noUiSlider.create(slider, {
	start: [0, 65],
	connect: true,
	range: {
		'min': 0,
		'max': 100
	}
});