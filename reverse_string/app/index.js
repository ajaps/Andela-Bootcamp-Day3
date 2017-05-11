function reverseString(stringArgument){
  let stringArray = '';
  let reversedString = '';

  //Checks for Edge cases
  if(typeof(stringArgument)==='string'){

    //split string into an array
    stringArray = stringArgument.split('');  

    //reverse array and convert to string
    for(let counter=stringArray.length-1; counter>=0; counter--){
      reversedString+=stringArray[counter];
    }

    // Test for empty string and palindromes else return reversed string
    if(reversedString === ''){
      return null;
    }
    else if(reversedString===stringArgument){
      return true;
    }
    else{
      return reversedString;
    }
  }
  else{
    return 'Invalid Input';
  }
}


module.exports = {
  reverseString:reverseString
}