let info = {
    name:"nitan",
    surName:"thapa",
    age : 29,
    fullName : function (){
        console.log(`my name is ${this.name} ${this.surName}`)
    }
}
console.log(info.name)
info.fullName()
//this keyword always point itself
//arrow function doesn`t support this keyword