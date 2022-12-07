const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Home page: get all posts
app.get('/posts', async(req, res) => {
    try {
        console.log("GET all posts");
        const posts = await pool.query(
            "SELECT * FROM post_table"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Home page: delete all posts
app.delete('/posts', async(req, res) => {
    try{
        console.log("DELETE all posts");
        const deletepost = await pool.query(
            "DELETE * FROM posttable"
        );
        res.json(deletepost);
    }
    catch(err){
        console.error(err.message);
    }
});

// Add post: add
app.post('/posts', async(req, res) => {
    try{
        console.log("POST a post");
        const newpost= await pool.query(
            "INSERT INTO posttable(body) values ($1) RETURNING*", [post.body]
        )
        res.json(newpost);
    }
    catch(err){
        console.error(err.message);
    }
});

// A post: put
app.put('/posts/:id', async(req, res) => {
    try{
        console.log("PUT a post");
        const {id} = req.params;
        const post = req.body;
        const updatepost = await pool.query(
            "UPDATE posttable SET (body) = ($2) WHERE id = $1", [id, post.body]
        )
        res.json(updatepost);
    }
    catch(err){
        console.error(err.message);
    }
});

// A post: get
app.get('/posts/:id', async(req, res) => {
    try{
        console.log("GET a post");
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
app.delete('/posts/:id', async(req, res) => {
    try{
        console.log("DELETE a post");
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


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});