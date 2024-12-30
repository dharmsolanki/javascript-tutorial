class User {

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password()
    {
        return this._password.toUpperCase();
    }

    set password(value)
    {
        this._password = value;
    }
}

const obj = new User("dharm@gmail.com","abcd");
console.log(obj.password)