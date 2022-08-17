function toggleZ(element) {
	document.querySelector('.item-1').style.zIndex = 60;
	document.querySelector('.item-2').style.zIndex = 50;
	document.querySelector('.item-3').style.zIndex = 40;
	document.querySelector('.item-4').style.zIndex = 30;
	document.querySelector('.item-5').style.zIndex = 20;
	let navItems = document.querySelectorAll('.item');
	for (const item of navItems) {
		item.classList.remove('active');
	}
	element.style.zIndex = 100;
	element.classList.add('active');
	document.querySelector('#main-navigation > ul').classList.remove('hover');
	document.querySelector('#nav-btn').classList.remove('hidden');
}

document.getElementById('nav-btn').onclick = function() {
	this.classList.add('hidden');
	document.querySelector('#main-navigation > ul').classList.add('hover');
}
