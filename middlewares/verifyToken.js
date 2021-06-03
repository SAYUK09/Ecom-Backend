const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Login Karo');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified)
        req.user = verified;
        console.log(verified,"veriffffy")
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}


// {
//     "name":"user",
//     "email":"user@gmail.com",
//     "password":"user11"
// }
// "User": "60b7298db598990097643358"
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3Mjk4ZGI1OTg5OTAwOTc2NDMzNTgiLCJpYXQiOjE2MjI2MTY1NDB9.ZjSQO7Oyg7NVq3Adkx96q4pcgGVKEL7q0KncFkcUpu0