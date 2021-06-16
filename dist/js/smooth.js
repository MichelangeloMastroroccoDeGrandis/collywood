//Smooth Scrolling
$('#home-btn a').on('click', function(event) {
	if(this.hash !== '') {
		event.preventDefault();
		
		const hash = this.hash;
		
		setTimeout( function() { $('html, body').animate(
		{
				scrollTop: $(hash).offset().top + 50
		},
		800
		)}, 1000);
	}
});
