// call()

function SetUsername(username) {
    //complex DB problem
    this.username = username;
    console.log('called');
}

function createUser (username, email, password){

 SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const userData = new createUser("Rohit", 'row@gmail.com', '108' ) 
    console.log(userData);

    /* called
createUser {
    username: 'Rohit',
    email: 'row@gmail.com',
    password: '108'
  } */
