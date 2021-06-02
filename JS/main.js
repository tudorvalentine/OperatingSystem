let elem = document.querySelector('.main-block');
const modal = document.querySelector('.modal_link');
const closeModal = document.querySelector('.btn-close');
const image = document.querySelector('.imag');
const btn = document.querySelector('.btn-primary');



elem.addEventListener('click', function(e){
	let target = e.target;
	if (target.localName=='button') {
			target.addEventListener('click', ()=>{
			modal.classList.remove('hide');
			let value = 'IMG/photo ('+target.value+')'+'.jpg';
			image.setAttribute('src', value);
		})

	}
	
})


modal.addEventListener('click' , function(e){
     const target = e.target;
     if(target == modal || target == closeModal){
     	modal.classList.add('hide');
     }  
});
document.addEventListener('keydown' ,  function(event) {
	const key = event.key;
	if(key == 'Escape'){
		modal.classList.add('hide');
	}
});
