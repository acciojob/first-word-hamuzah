function firstWord(str) {
  // your code here
	// If the input string is empty or does not contain any space, return the entire string
   
    // If the string is empty or doesn't contain any space, return the entire string
    if (str === '' || !str.includes(' ')) {
        return str;
    }

    let res = str.split(' ')[0];

	return res;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
