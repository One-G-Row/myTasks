//object literals
let userOne = {
    email: "teleknis@yahoo.com",
    name: "telek",
    login (){
        console.log(`${this.email} has logged in`)
    },   
    logout(){
        console.log(`${this.email} has loggedout`)
    },
}
console.log(userOne.name)
userOne.login()
userOne.logout()