const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let outputStr = '';
  let str = '';
  let symb = '';
  
  for ( let i = 0; i < expr.length; i += 10 ) {
    symb = ( String( expr.slice(i,i + 10).includes('*') ? ' ' : + expr.slice(i,i + 10) ) );
    
    if ( symb === ' ' ) {
       outputStr += symb;
       continue;
    }   
       
    for ( let j = 0; j < symb.length; j += 2 ) {
      str += ( + symb.slice(j,j + 2) === 10 ? '.' : '-' )
    }      
	    
    for ( let key in MORSE_TABLE ) {
      str === key ? outputStr += MORSE_TABLE[key] : '';     
    }
	    
    str = '';     
  }
  
  return outputStr;  
};

module.exports = {
    decode
}