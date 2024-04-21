function firstWord(str) {
  // your code here
	// If the input string is empty or does not contain any space, return the entire string
   
      // Check if the input string is empty or does not contain any space
  if (str.trim() === '' || !str.includes(' ')) {
    return str;
  }

  // Extract the first word up to the first space
  return str.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
