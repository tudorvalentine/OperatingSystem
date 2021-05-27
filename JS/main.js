let elem = document.querySelector('.main-block')

elem.addEventListener('click', function(e){
	const target = e.target;
	console.log(target.value)
})