const op = document.querySelector('.sasa');
const mod = document.querySelector('.modal-container')
const modal = document.querySelector('.modal');
const del = document.querySelector('.del');
togglemoddel = () => {
	const display = window.getComputedStyle(mod).getPropertyValue('display');
	if (display === 'none')
		mod.style.display = 'block';
	else
		mod.style.display = 'none';
}

const ticket = document.querySelector('.ticket');
ticket.addEventListener('click', togglemoddel);

op.addEventListener('click', togglemoddel);
del.addEventListener('click', togglemoddel);
modal.addEventListener('click', (e) => {
	e.stopPropagation();
});
mod.addEventListener('click', togglemoddel);


const customSelectDropDown = document.querySelector('.custom-select-drop-down');


const caretUp = document.querySelector('#oop');
const caretDown = document.querySelector('#dow');

function wawa(e){
	e.stopPropagation();
 	if (customSelectDropDown.style.display === 'none'){
 		customSelectDropDown.style.display = 'block';
 		caretDown.style.display = 'none';
 		caretUp.style.display = '';

 	}
 	else {
 		customSelectDropDown.style.display = 'none'
 		caretDown.style.display = '';
 		caretUp.style.display = 'none';
 	} 

 	// if (caretDown.style.display === 'none') caretDown.style.display = 'inline';
 	// else caretDown.style.display = 'none'

 	// if (caretUp.style.display === 'none') caretUp.style.display = 'inline';
 	// else caretUp.style.display = 'none'
}


function fafa(){
		customSelectDropDown.style.display = 'none';
}



document.body.addEventListener('click', fafa);
const mama = document.querySelector('#mama');
mama.addEventListener('click', wawa);
