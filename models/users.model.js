const {v4: uuidv4} = require("uuid");
let users = [
    {
        id: uuidv4(),
        username: "Mehedi Hasan Lemon",
        email: "mehedi@gmail.com"
    },    
    {
        id: uuidv4(),
        username: "Arif Hossain",
        email: "arif@gmail.com"
    },
        {
        id: uuidv4(),
        username: "Jakir Jisan",
        email: "jakir@gmail.com"
    },

]

module.exports = users;