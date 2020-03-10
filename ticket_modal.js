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
}


function fafa(){
		customSelectDropDown.style.display = 'none';
		caretDown.style.display = '';
 		caretUp.style.display = 'none';

 		stylesDropDown.style.display = 'none';
 		styleCaretDown.style.display = '';
 		styleCaretUp.style.display = 'none';
}

const stylesDropDown = document.querySelector('#styles-drop-down');
const styleCaretDown = document.querySelector('#style-caret-down');
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

const description = document.querySelector('textarea');

function heading1(){
	description.value += '\n# ';
}

function heading2(){
	description.value += '\n## ';
}

function heading3(){
	description.value += '\n### ';
}

function normalText(){
	description.value  += '\n';
}

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

const head1= document.querySelector('#heading-1');
const head2= document.querySelector('#heading-2');
const head3= document.querySelector('#heading-3');
const normalTxt= document.querySelector('#normal-text');

head1.addEventListener('click', heading1);
head2.addEventListener('click', heading2);
head3.addEventListener('click', heading3);
normalTxt.addEventListener('click', normalText);

function boldify(){
	description.value += '****';
	let sel = description.SelectionStart;
	sel = description.SelectionStart - 2;
}

function italify(){
	description.value += '**';
	let sel = description.SelectionStart;
	sel = description.SelectionStart - 2;
}

function underline(){
	description.value += '__';
	let sel = description.SelectionStart;
	sel = description.SelectionStart - 2;
}

function link(){
	description.value += '[link name](url)';
	let sel = description.SelectionStart;
	sel = description.SelectionStart - 2;
}

const bold = document.querySelector('.fa-bold');
bold.addEventListener('click', boldify);

const ital = document.querySelector('.fa-italic');
ital.addEventListener('click', italify);

const underl = document.querySelector('.fa-underline');
underl.addEventListener('click', underline);

const linko = document.querySelector('.fa-link');
linko.addEventListener('click', link);



