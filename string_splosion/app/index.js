function StringSplosion (stringArgument){
  this.stringArgument =stringArgument;
}


StringSplosion.prototype.manipulate = function(){
  //To test for Edge cases
  if(typeof(this.stringArgument)==='string'){
    let result = '';

    //To manipulate the string
    for(let counter=0; counter<this.stringArgument.length; counter++){
      for(let innerCounter=0; innerCounter<=counter; innerCounter++){
        result += this.stringArgument[innerCounter];
      }
    }
    return result;
  }
  //Return 'invalid input' if argument is not string
  else{
    return 'invalid input'
  }
}

module.exports = {
  StringSplosion : StringSplosion
}