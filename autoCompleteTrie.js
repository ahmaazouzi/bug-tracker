class TrieNode {
	constructor(value){
		this.value = value;
		this.descendents = [];
	}
}

const log = valo => console.log(valo);

const someTree = new TrieNode("Ahmed");

log(someTree.value);

