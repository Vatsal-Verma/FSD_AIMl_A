// const mypromise = new Promise((resolve,reject)=>{
//     console.log("done")
//     resolve("succes")
// });
// mypromise.then((data) =>{  
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// });

const url = "https://api.openweathermap.org/data/2.5/weather?q=meerut&appid=1809be7589934c55740575b79db13ee7&units=metric";
fetch(url).then( (data) => {
    console.log(data.json())
}).catch((err) => {
    console.log(err);
})
