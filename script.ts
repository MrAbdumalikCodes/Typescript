class User{
    private id:number
    fullName: string
    age:number
    protected job:string
    constructor(id:number,name:string,age:number,job:string){
        this.id = id
        this.fullName = name
        this.age = age
        this.job = job
    }
    set firstName(firstName: string){
        this.fullName = firstName
    }
}
class Student extends User{
    some(){
        super.fullName
    }
}
let alex = new User(1,'Alex Smith',25,'Software Enginer')
alex.firstName = 'Johny Cage'
console.log(alex);
