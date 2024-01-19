const connection = require("./sql.js");
const express = require("express");
const app = express();
app.use(express.json());

app.listen(3500, () => {
    console.log("Port running on 3500");
});

// app.post("/register", (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ error: "Please provide both username and password." });
//     }

//     connection.query(
//         "INSERT INTO tablename (username, password) VALUES (?, ?)",
//         [username, password],
//         (err, results) => {
//             if (err) {
//                 console.error("Error inserting data into MySQL:", err);
//                 return res.status(500).json({ error: "Internal Server Error" });
//             }

//             return res.status(201).json({ message: "User registered successfully" });
//         }
//     );
// });



// app.get("/", (req, res) => {
//   connection.query(`insert into tablename set ?`,req.body, (err, result) => {
//     res.status(200).json({
//         "status":200,
//         "message":"successful register"
//     })
//   });
// });

// app.get("/users",(req,res)=>{

//     connection.query("SELECT * FROM testing.tablename;",(err,data)=>{

//         if(err){
//             res.status(404).send(err)
//         }else{
//             res.status(200).json(data)
//         }
//     })
// })
