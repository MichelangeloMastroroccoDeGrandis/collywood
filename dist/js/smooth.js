//Smooth Scrolling
$('.nav-item a').on('click', function(event) {
	if(this.hash !== '') {
		event.preventDefault();
		
		const hash = this.hash;
		
		setTimeout( function() { $('html, body').animate(
		{
				scrollTop: $(hash).offset().top - 50
		},
		1000
		)}, 100);
	}
});
