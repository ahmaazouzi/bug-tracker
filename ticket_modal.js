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
 		customSelectDropDown.style.display = '';
 		caretDown.style.display = 'none';
 		caretUp.style.display = '';

 	}
 	else {
 		customSelectDropDown.style.display = 'none'
 		caretDown.style.display = '';
 		caretUp.style.display = 'none';
 	} 
}


function fafa(){
		customSelectDropDown.style.display = 'none';
		caretDown.style.display = '';
 		caretUp.style.display = 'none';
}

const stylesDropDown = document.querySelector('#styles-drop-down');
const styleCaretDown= document.querySelector('#style-caret-down');
const styleCaretUp= document.querySelector('#style-caret-up');
function toggleTextStyles(e){
	e.stopPropagation();
 	if (stylesDropDown.style.display === 'none'){
 		stylesDropDown.style.display = 'block';
 		styleCaretDown.style.display = 'none';
 		styleCaretUp.style.display = '';

 	}
 	else {
 		stylesDropDown.style.display = 'none'
 		styleCaretDown .style.display = '';
 		styleCaretUp.style.display = 'none';
 	} 
}

const stylesButton = document.querySelector('#style-button');
stylesButton.addEventListener('click', toggleTextStyles);

let names = ['AmaAdo Bandido', 'Malato Aagara', 'Zaza LaAla Baba', 'Wawa fafa McWanto', 'Fafa Fafa'];

function selectName(userInput, names, searchLimit){
	const results = [];

	if (userInput.length == 0) results.push('Ahmed Maazouzi(Me)');

	let numMatches = 0;
	for (i in names){
		let pattern = new RegExp('([^a-zA-Z]' + userInput + '|^' + userInput +')', 'gi');

		if (pattern.test(names[i]) && userInput  && numMatches <= searchLimit){
			results.push(names[i]);
			numMatches++;
		}	
	}
	return results;
}


modal.addEventListener('click', fafa);
document.body.addEventListener('click', fafa);
const mama = document.querySelector('#mama');
mama.addEventListener('click', wawa);

const taftafins = document.querySelector('#taftafins');
taftafins.addEventListener('click',
	() => {
		customSelectDropDown.insertAdjacentHTML('beforeend', 
				`<div class="taftaf" style="width: 100%; margin: 0px; border-radius: 0px; margin-left: -30px;" onclick="taftafins.value = \'Ahmed Maazouzi (Me)\'"> Ahmed Maazouzi (Me) </div>`);
	},
	{once: true})
taftafins.addEventListener('input', function(){
	customSelectDropDown.style.display = 'block';
	const results =  selectName(taftafins.value, names, 2);
	customSelectDropDown.innerHTML = '';
	{once: true}
	for (i in results){
		customSelectDropDown.insertAdjacentHTML('beforeend', 
				`<div class="taftaf" style="width: 100%; margin: 0px; border-radius: 0px; margin-left: -30px;" onclick="taftafins.value = \'${results[i]}\'"> ${results[i]} </div>`);
	}
})


