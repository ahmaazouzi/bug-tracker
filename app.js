let cats = require('./cats');

console.log(cats);

function palyn(str){
	if (str.length === 0)
        return false;
    if (str.length === 1)
        return true;
    if (str[0] !== str[str.length - 1]) return false;
    else return palyn(str.slice(1, str.length - 1)); 
