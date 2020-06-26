let names = ['AmaAdo Bandido', 'Malato Aagara', 'Zaza LaAla Baba', 'Wawa fafa McWanto', 'Fafa Fafa']

function selectName(userInput, names, searchLimit){
	for (i in names){
		let pattern = new RegExp('([^a-zA-Z]' + userInput + '|^' + userInput +')', 'gi');
		let numMatches = 0;
		if (pattern.test(names[i]) && numMatches <= searchLimit){
			console.log(names[i]);
			numMatches++;
		}
	}
	
}

selectName("z", names, 3);
