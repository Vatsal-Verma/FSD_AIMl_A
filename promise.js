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


task1().then((value) =>{
    console.log(value); return task2();
}).then((value) => {
    console.log(value); return task3();
}).then((value)=> {
    console.log(value);
})
console.log("all tasks are done yay")