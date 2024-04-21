function firstWord(str) {
  // your code here
	// If the input string is empty or does not contain any space, return the entire string
   
    if(!s){
		return '';
	}
	const initialWord = s.split(' ');
	let firstWord = initialWord[0];
	return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
