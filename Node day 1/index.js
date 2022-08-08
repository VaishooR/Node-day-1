// OS MODULE:
//! os module displays all the details about the os

const os=require("os");

let platform=os.platform();
console.log(platform);

let cpus=os.cpus();
console.log(cpus.length);

let uptime=os.uptime();
console.log(uptime);


// FS MODULE:
const fs = require('fs');

//! writeFile creates a new file, along with the content we mention
fs.writeFile('newfile.js',"A new file has been created",(err)=>{
    if(err){throw err}
    console.log('File created successfully')
})
// o/p:  File created successfully



//! readFile displays the content of the file we have mentioned:
fs.readFile('./newfile.js',(err,data)=>{
    if(err){throw err}
    console.log(data.toString());
})
// o/p:   A new file has been created



//!  readdir displays an array containing all the files in that particular folder we have mentioned:
fs.readdir("./",(err,files)=>{
    if(err){throw err}
    console.log(files)
})
// o/p:   [ 'index.js', 'newfile.js', 'one.js', 'two.txt' ]



fs.readdir("../../../",(err,files)=>{
    if(err){throw err}
    console.log(files)
})