//Asynchronous method of reading files.
const {readFile, writeFile} = require('fs');

readFile('./files/text1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result;
    console.log(first)
    readFile('./files/text2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        console.log(second)
        writeFile(
            './files/text-async.txt',
            'Windingo knows ' + first + '\n' + second,
            (err, result) => {
                if(err){
                    console.log(err)
                    return;
                }
                const res = result;
                console.log(res)
                return res
            }
         )
    })
}) 
