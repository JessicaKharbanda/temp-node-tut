const {readFile, writeFile}= require('fs');

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{       //utf-8 is the encoding else it will print the buffer (helps decode the data)
    if(err){
        console.log(err)
        return ;
    }
    const first=result;
    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile(
            './content/result-async.txt',
        `here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
    })
    console.log('starting next task')

    //in async approach
    // we start a task, we offload it, and other users can use the application then, while in sync approach , it is executed line by line