document.querySelector('#darkmode').addEventListener('click', function() {
	document.getElementsByTagName('body')[0].classList.toggle('dark');
	document.querySelectorAll('h2').classList.toggle('dark');
});


