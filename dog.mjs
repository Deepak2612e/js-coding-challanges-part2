
class Animal{
    constructor(name)
    {
        this.name = name
    }
    makeSound(){
        console.log(`${this.name} make sound`)
    }
}

export class Dog1 extends Animal{
    constructor(name,breed)
    {
        super(name)
        this.breed = breed
    }

    breeds(){
        console.log(`This ${this.name} is ${this.breed} breed`)
    }
    makeSound(){
        console.log(`${this.name} says Woof!`)
    }

}


class Dog{

    constructor(name , Breed)
    {
        this.name = name
        this.breed = Breed
    }

    bark()
    {
        console.log(`${this.name} says Woof!`)
    }
}
export default Dog