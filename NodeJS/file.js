import fs from 'fs';

//======Asynchronous Write=========//

//fs.writeFile("write.txt","Hello World",(err,res)=>{});

//======Synchronous READ=========//

// let read = fs.readFileSync("./write.txt","utf8");
// console.log(read);

//======Synchronous Append =========//

// fs.appendFileSync("./write.txt"," Good Morning");

//======Asynchronous Read=========//

// fs.readFile("./write.txt","utf8",(err,res)=>{
//     console.log(res);
// });