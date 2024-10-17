const person = {
    name: "vatsal",
    age : 80
}

const viewpseron = person
const viewpseron2 = {...person, city:"delhi", name:"something"}
viewpseron.age = 70

console.log(person.age)
console.log(viewpseron2.age)
console.log(viewpseron2.city )