function task1(){
    return new Promise((resolve,reject) => {
        
        setTimeout(()=>{

            const walked = true;
            if(walked)
            resolve("you have walked the dog");
            else
            reject("you didnt walk the dog");

        } , 3000);

    })
}
function task2(){
    return new Promise((resolve,reject) => {
        
        setTimeout(()=>{

            const oked = true;
            if(oked)
            resolve("you have done task2");
            else
            reject("you didnt do task2");

        } , 3000);

    })
}
function task3(){
    return new Promise((resolve,reject) => {
        
        setTimeout(()=>{

            const tasked = true;
            if(tasked)
            resolve("you have done task3");
            else
            reject("you didnt so task3 ");

        } , 3000);

    })
}
//await is always used with async
async function doTask(){

    try{

    const taskone = await task1();
    console.log(taskone);

    const tasktwo = await task2();
    console.log(tasktwo);

    const taskthree = await task3();
    console.log(taskthree);

    }

    catch(error){
        console.log(error);
    }
}
doTask();


