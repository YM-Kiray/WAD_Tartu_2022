const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    console.log("Hallo")
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// A simple query that creates a table in our database
// Note that the "SERIAL"  pseudo-type that is used after the "id" is used to create a sequence object,
// and set the next value generated by the sequence as the default value for the column
const createTblQuery = `

    CREATE TABLE IF NOT EXISTS "users" (
        "id" SERIAL PRIMARY KEY,         
        "email" VARCHAR(200) NOT NULL UNIQUE,
        "password" VARCHAR(200) NOT NULL,
        "createTime"  timestamp default current_timestamp
    );
    
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "likes" VARCHAR(200) NOT NULL,
	    "author" SERIAL NOT NULL REFERENCES users (id),
        "postText" VARCHAR(200) NOT NULL,
        "createTime"  timestamp default current_timestamp
    );
    `;
// A function to execute the previous query   
execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posttable" table');
    }
});


module.exports = pool;