const { writeFile } = require("fs");
const fs = require("fs/promises");
// function myReadFile(){
    
//     try{

//         const res = fs.readFile("dummy.txt", "utf-8");
//         res.then( (data) => {
//             console.log("file data:" ,data)
//         })
//         .catch( (err) => {
//             throw err;
//         })
//     }

//     catch(err) {
//         console.log("file reading error: ",err.message)
//     }


// }

const myReadFile =  ( async () => {
    try{
        const res = await fs.readFile("dummy.txt", "utf-8");
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
})

async function myWritefileA(data){
    try{
        await fs.writeFile("dummy.txt", data)
    }
    catch(err){
        console.log("File Write error: ",err.message)
    }
}

// myReadFile();
myWritefileA("reshu bada ch**iya");