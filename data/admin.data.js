const bcrypt = require('bcrypt')
const data = require('../data/data')
const wenbTokens = require('../services/auth')

const hashing = (p) =>{
    return bcrypt.hashSync(p,0)
}

const compare = (p1 , p2) => {
    return bcrypt.compareSync(p1 , p2)
}

const findOrCreate = (email, password) => {
    let found = false 

    for (let i of data.admins) {
        if (email === i.email) {
            found = true
            if( compare(password , i.password)) {
                return
            } else {
                console.log("admin password didn't match")
            }
        }
    }
    if(!found){
        data.admins.push({
            id : data.admins.length ,
            email,
            password : hashing(password)
        })
    }

      console.log(data.admins)
}

module.exports = {
    findOrCreate
}