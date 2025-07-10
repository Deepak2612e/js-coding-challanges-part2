import add from "./math.mjs"

import Dog,{ Dog1 } from "./Dog.mjs"
import Captilize from "./utils.mjs"
const sum = (a,b) => `Sum of ${a} + ${b} = ${a+b}`

const greet = (name) => `Hello, '${name}'! Welcome.`

const arr = [10,20,30,40]
const [first,second] = arr

const obj = {name : "Alice", age: 30, city : "New York"}
const {name, age} = obj

const arr1 = [10,20,30]
const arr2 = [40,50]
// const arr3 = [...arr1,...arr2]
// console.log(arr3)

const power = (base,exponent = 2) => console.log(Math.pow(base,exponent))

// const power = (base,exponent) => exponent === undefined ? console.log(Math.pow(base,2)) : console.log(Math.pow(base,exponent))

// const Doubled = (num) =>
// {
//     return num * 2
// }
const array = arr.map(n => n * 2)
const array2 = [1,2,3,4,5,6]

const sumAll = (numbers) => numbers.reduce((a,b) => a+b,0)
const numbers = [1,2,3,4,5,6,7,8]

const obj1 = {id : 1, firstname : "John", email : "john@email.com"}

const {id : userId, firstname : fullname ="Guest", email} = obj1

const obj2 = {user : {name1 : "Jane",address : {street : "Main st.",city : "Anytowm"}}}

const{user : {name1 ,address:{street,city}}} = obj2


console.log(sumAll(numbers))
console.log(sum(2,4))
console.log(greet("deepak"))
console.log(`First: ${first}, Second: ${second}`)
console.log(`Name : ${'name'} and Age : ${age}`)
console.log(arr1.concat(arr2))
power(3,2)
power(4)
console.log(array)
// console.log(arr.map(Doubled))



var dog = new Dog("Dog","German Shepard")
dog.bark()
console.log(add(2,5))
console.log(array2.filter(n => n % 2 === 0))
console.log(userId+" "+fullname+" "+email)
console.log(name1+" "+city+" "+street)

const fetchData = (id) => {
    return new Promise((rs,rj) =>
    {
        setTimeout(() =>{
            if(id % 2 === 0)
            {
                rs({id: id, data : "Data"})
            }
            else{
                rj("Id must be even")
            }
        },2000
    )})
}
console.log()

fetchData(8)
  .then(result => console.log("Resolved:", result))
  .catch(error => console.error("Rejected:", error))

console.log()

const ar = [{item : "A", price : 40},{item : "B", price : 20},{item : "C", price : 30}]

let sum1 = ar.reduce((a,b) => a + b.price, 0)

console.log(sum1)

const b = [{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}]

console.log(b.find(a => a.id === 2))

const displayStatus = (isLoggedIn) => isLoggedIn ? console.log("Welcome back!") : console.log("Please log in.")

displayStatus(false)

console.log(Captilize("morning"))

const ar1 = [2,4,6,8]

console.log(ar1.some(a => a > 5))
console.log(ar1.every(a => a%2 === 0))
console.log()


const id = Symbol("user")
// const id2 = Symbol("user")
// console.log(id === id2)

console.log(id)

const idGenerator = function* () {
    let x = 0
    while(true)
    {
        yield x++
    }
}

const generator = idGenerator()

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)


const displayUserInfo = ({ name, age, city = "Unknown"}) => {
    return `Name:${name}, Age:${age}, City:${city}`
}

console.log(displayUserInfo({name:"Prem",age:90}))

const dog1 = new Dog1("Dog","Labrador")
dog1.makeSound()
dog1.breeds()

console.log(1+2+"3")
const logItems = (items) =>
{
    items.map((item) =>
    {
        console.log(item)
        console.log("X")
    })
}
const items =["Milk", "Butter","Rice"]
logItems(items)