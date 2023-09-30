const {readFileSync, writeFileSync}= require('fs');
console.log('start')
// or
// const fs=require('fs');
// fs.readFileSync

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/subfolder/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`); //if the file already exists, the content is overridden else a new file is created

writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`, {flag:'a'}); //to append a file

 console.log('done with this task');
 console.log('starting the next one');   