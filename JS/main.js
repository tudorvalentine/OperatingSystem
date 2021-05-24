'use strict'
let img = document.getElementById("answer")
let btnfind = document.querySelector('#find')

btnfind.addEventListener('click', () => {

	img.removeAttribute('src');
	let inQuestion = document.querySelector('#question').value;
	let notfound = document.querySelector('#nfound')

	console.log(inQuestion)
	switch (inQuestion) {
		case 'Regulile de elaborare și aprobare a bugetului se numesc':
			img.setAttribute("src", "IMG/photo1.jpg");
			notfound.innerHTML = ''
			break;
		case 'Repartiția funcțională completează procesul repartiției prin intervenția administrațiilor publice determinînd formarea unor noi venituri':
			img.setAttribute("src", "IMG/photo2.jpg");
			notfound.innerHTML = ''
			break;
		default:
			notfound.innerHTML = 'Nihuea nui'
			break;
	}
})
