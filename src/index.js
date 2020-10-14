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
    let result = '';
    let letterIndex = 0;
    while(expr.length > letterIndex * 10){
        const startPosition = letterIndex * 10;
        const endPosition = startPosition + 10;

        const letterBin = expr.slice(startPosition,  endPosition);
        const morseCode = binToMorse(letterBin);
        const letter = morseCode === '**********' ? ' ' : MORSE_TABLE[morseCode];
        result += letter;
        letterIndex++;
    }
    return result;

    function binToMorse(binaryCode){
        if(binaryCode.includes('*')) return binaryCode;
        let morse = '';
        binaryCode = binaryCode.split('');
        while (binaryCode.length){
            if (!binaryCode.includes('1')) {
                return morse;
            }
            const signBin = [];
            signBin.push(binaryCode.pop());
            signBin.push(binaryCode.pop());
            const code = signBin.reverse().join('');
            morse = `${code == '10' ? '.' : '-'}${morse}`;
        }
        return morse;
    }
}

module.exports = {
    decode
}