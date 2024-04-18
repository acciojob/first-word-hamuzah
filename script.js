function firstWord(s) {
  // your code here
	// If the input string is empty or does not contain any space, return the entire string
   
  if(!s || !s.includes(' ')){
        return s;
     }  
     // Find the index of the first space character
     const firstIndex = s.indexOf(' ');  
      // Extract the substring from the start of the string up to the first space
     let final = s.substring(0, firstIndex);
       
     return final;
     	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
