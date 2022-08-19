document.querySelector('#main-navigation > ul').addEventListener('click', function(e) {
	if(this.classList.contains('hover')) {
		document.querySelector('.item-1').style.zIndex = 60;
		document.querySelector('.item-2').style.zIndex = 50;
		document.querySelector('.item-3').style.zIndex = 40;
		document.querySelector('.item-4').style.zIndex = 30;
		document.querySelector('.item-5').style.zIndex = 20;
		let navItems = document.querySelectorAll('.item');
		for (const item of navItems) {
			item.classList.remove('active');
		}
		e.target.style.zIndex = 100;
		e.target.classList.add('active');
	}
	this.classList.toggle('hover');
});
