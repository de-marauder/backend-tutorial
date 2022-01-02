//Synchronous method of reading and writing files.
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./files/text1.txt', 'utf8')
const second = readFileSync('./files/text2.txt', 'utf8')

writeFileSync(
    './files/text3.txt', 
    "The Apache don't know, "+ first + " and "+ second + '\n',
    {flag: 'a'}
)