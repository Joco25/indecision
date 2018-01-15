class Person{
    constructor(name='anonymous',age=0){
        this.name= name,
        this.age= age
    }
    getGreeting(){
        return `Hi I am ${this.name}`
    }
    getDescription(){
        return `I am ${this.name} and I am ${this.age} years old `
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        if(this.hasMajor()){
            description += `Their major is ${this.major}`
        }
        return `testing ${description}`
    }
}

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age)
        this.location = location
    }
    hasLocation(){
        return !!this.location
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.hasLocation()){
            greeting += ` I am visiting ${this.location}`
        }
        return greeting;
    }
}


const me = new Traveller('Joco',22,'Lagos')
console.log(me.getGreeting())