const fs = require('node:fs');
const { json } = require('node:stream/consumers');

// any method that have Sync is a blocking code
// the compiler must wait for a bloking code to finish to continue

///////////////////////////// Read fill
let get = fs.readFileSync('./word.txt');

//           path,     translate,    callback func to handel errors and data
fs.readFile('./word.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("can not reach somthing went wrong", err.path);
    }else{
        console.log(data);
    }
})


///////////////////////////// write fill
fs.writeFile('./users.json', JSON.stringify([{id : 1, name: 'mahmoud'}]) ,'utf8', (err) =>{
    if(err){
        console.log("no create");
    }else{
        console.log('file created');
    }
});



////////////////////////////// delet fill
fs.unlink('./users.json', (err) => {
    if(err){
        console.log("no delet");
    }else{
        console.log('file deleted');
    }
})
