class User{
    constructor(email, name){
        this.email = email,
        this.name = name
    }
    login() {
    console.log(`${this.email} has logged in`)
}
    logout() {
    console.log(`${this.email} has logged out`)
}
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

let userOne = new User("kimwarer@dam.com", "kimwarer")
let userTwo = new User("jimjim@rocketmail.com","jimjim")
let admin = new Admin("rectify@mozarella.cheese", "rectify")

let users = [userOne, userTwo, admin]

admin.deleteUser(userOne)
console.log(users)
//userOne.login()
//userTwo.logout()