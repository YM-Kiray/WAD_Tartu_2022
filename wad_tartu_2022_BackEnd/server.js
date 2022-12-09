const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;
// const bcrypt = require('bcrypt');
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');

// const secret = "gdgdhdbcb770785rgdzqws"; // use a stronger secret
// const maxAge = 60 * 60; //unlike cookies, the expiresIn in jwt token is calculated by seconds not milliseconds

/*
const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
        //jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
}
*/

const app = express();
app.use(cors());
/*
function validate(password){
    let regex1 = /[A-Z]/
    let regex21 = /[A-Z]+/
    let regex22 = /[a-z]{2,}/
    let regex23 = /[0-9]+/
    let regex24 = /_+/
    if(password.length < 8 || password.length > 15){
        return false;
    }                
    else if(password.match(regex1)==null || password.match(regex1).index != 0){
        return false;
    }
    else if(!(regex21.test(password) && regex22.test(password) && regex23.test(password) && regex24.test(password))){
        return false;
    }
    else{
        return true;
    }  
}

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}
*/


// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json()); // Parses incoming requests with JSON payloads and is based on body-parser.
// app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.


// Home page: get all posts
app.get('/api/posts', async(req, res) => {
    try {
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Home page: delete all posts
app.delete('/api/posts', async(req, res) => {
    try{
        const deletepost = await pool.query(
            "TRUNCATE posttable"
        );
        res.json(deletepost);
    }
    catch(err){
        console.error(err.message);
    }
});

// Add post: add
app.post('/api/posts', async(req, res) => {
    try{
        const text = req.body;
        const newpost= await pool.query(
            "INSERT INTO posttable(text) values ($1) RETURNING*", [text.body]
        )
        res.json(newpost);
    }
    catch(err){
        console.error(err.message);
    }
});

// A post: put
app.put('/api/posts/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const post = req.body;
        const updatepost = await pool.query(
            "UPDATE posttable SET text = $2 WHERE id = $1", [id, post.text]
        )
        res.json(updatepost);
    }
    catch(err){
        console.error(err.message);
    }
});

// A post: get
app.get('/api/posts/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const posts = await pool.query(
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});

// A post: delete
app.delete('/api/posts/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    }
    catch(err){
        console.error(err.message);
    }
});

/*
// is used to check whether a user is authinticated
app.get('/auth/authenticate', async(req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    //console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.json({ "authenticated": authenticated }); // authenticated = false
                } else { // token exists and it is verified 
                    console.log('author is authinticated');
                    authenticated = true;
                    res.json({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else { //applies when the token does not exist
            console.log('author is not authinticated');
            res.json({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

// signup a user
app.post('/auth/signup', async(req, res) => {
    try {
        console.log("a signup request has arrived");
        const { email, password } = req.body;
        
        if(!validate(password) || email.length == 0){
            return res.status(401).json({error: "Password or email not valid"});
        }

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length !== 0) return res.status(401).json({ error: "Email already registered" });


        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        //console.log(token);
        //res.cookie("isAuthorized", true, { maxAge: 1000 * 60, httpOnly: true });
        //res.cookie('jwt', token, { maxAge: 6000000, httpOnly: true });
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
    } catch (err) {
        console.error(err.message);
        res.status(400).json({error: err.message});
    }
});
*/

/*
app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });
*/
        /* 
        To authenticate users, you will need to compare the password they provide with the one in the database. 
        bcrypt.compare() accepts the plain text password and the hash that you stored, along with a callback function. 
        That callback supplies an object containing any errors that occurred, and the overall result from the comparison. 
        If the password matches the hash, the result is true.

        bcrypt.compare method takes the first argument as a plain text and the second argument as a hash password. 
        If both are equal then it returns true else returns false.
        */

        /*
        //Checking if the password is correct
        console.log(user)
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //console.log("validPassword:" + validPassword);
        if (validPassword){
            const token = await generateJWT(user.rows[0].id);
            res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id });
        }     
        return res.status(401).json({ error: "Incorrect password" });

        
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

//logout a user = deletes the jwt
app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});
*/

app.listen(port, () => {
    console.log("Server is listening to port" + port)
});

