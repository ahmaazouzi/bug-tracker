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

function wawa(e){
	e.stopPropagation();
 	if (customSelectDropDown.style.display === 'none')
 		customSelectDropDown.style.display = 'block';
 	else customSelectDropDown.style.display = 'none'
}


function fafa(e){
	if (e.target !== customSelectDropDown)
		customSelectDropDown.style.display = 'none';
}

const baba = document.querySelector('i');
function logo(){
	console.log(baba);
}

document.addEventListener('click', fafa);
const mama = document.querySelector('#mama');
mama.addEventListener('click', wawa);
