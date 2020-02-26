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
