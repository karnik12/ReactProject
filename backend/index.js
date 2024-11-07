const con = require('./connection.js')
const express = require("express");
const cors = require('cors');
const bodyParse = require('body-parser')
const multer = require('multer')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const JWT_SECRET = 'qwert'
const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))




 const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "./upload/images")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})
 
const upload = multer({storage})



app.get('/admin/users',async (req,res) => {
  try {
      const sql = "SELECT * FROM users";
      // const sql = "SELECT id, name, email FROM users";  if password not to show on admin pannel

      con.query(sql,(error,result)=>{
      if (!result || result.length === 0) {
          console.log(result)
          return res.status(404).json({message:'No Users Found'})
      }
      return res.status(200).send(result);
   })
  } catch (error) {
      res.status(404).json({message:"Error in users api"})
  }
})





app.get('/users/:id', (req, res) => {
    const { id } = req.params; 
    const sql = "SELECT * FROM users WHERE id = ?"; 
  
    con.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error fetching data: ', err);
        return res.status(500).send('Database error');
      }
     if (result) console.log(result);
      
      if (result.length > 0) {
       
        res.json(result[0]); 
        
      } else {
        res.status(404).send('User not found');
      }
    });
  });





app.delete('/delete-user/:id',function(req,res,){
    const ID = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?"
    con.query(sql,[ID],function(error,data){
        if(error){
            throw error;
        }else{
            // res.redirect("/users")
            res.send({status:200,message:"done"})
        }
    })
})
app.delete('/delete-message/:id',function(req,res,){
       const ID = req.params.id;
    const sql = "DELETE FROM messages WHERE id = ?"
    con.query(sql,[ID],function(error,data){
        if(error){
            throw error;
    }else{
            // res.redirect("/users")
            res.send({status:200,message:"done"})
        }
    })
})

  
app.put('/update-user/:id',upload.single("file"),(req,res)=>{
    const ID = req.params.id
    const {name , email , department , qualification , experience , skills  } = req.body; 

    const image = req.file ? req.file.filename : null;

    const sql = `UPDATE users SET name = ?, email = ? ,department = ?,qualification = ?,experience = ?,skills = ?,image=? WHERE id = ?`;
  
    con.query(sql, [ name, email , department , qualification , experience , skills , image, ID], (err, result) => {
      if (err) {
        console.error('Error updating data: ', err);
        return res.status(500).send('Database error',);
      }
      // console.log(result)
      res.send('Record updated successfully');
    });
})


// =================================





app.post('/register',upload.single('image'),(req, res) => {


  const { first_name , last_name , email, password, profession, experience, education, skills } = req.body;
  const image = req.file ? req.file.filename : null;
  const sql = 'INSERT INTO users (`firstname`, `lastname`, email, password, image, department, experience, qualification, skills) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
      first_name || null,
      last_name || null,
      email || null,
      password || null,
      image || null,
      profession || null,
      experience || null,
      education || null,
      skills || null
  ];
  con.query(sql, values, (err, result) => {
      if(err) return res.json({Error: "Error singup query" , err});
      return res.json({Status: "Success"});
  })
});


// ====================


const adminMiddleware = async (req,res,next)=>{
  const token = req.header('Authorization')

  if (!token){
      return res.status(402).send('TOKEN NOT FOUND')
  }

  const jwtToken = token.replace("Bearer"," ").trim();
  // console.log(jwtToken)
  try {
      const isVerified = jwt.verify(jwtToken ,JWT_SECRET);
      // console.log(isVerified);

      const sql = 'SELECT * FROM users WHERE email=?'
      con.query(sql,[isVerified.email],(error,result)=>{
         if (error) console.log(error, "query error");
         
         userData = result[0]
      //    console.log(userData)
      req.user=userData
         next()
      })
  } catch (error) {
      console.log(error);
  }};


  // ====================================

  app.post('/login',(req,res)=>{

    const { email, password, }=req.body;
    
    if (!email ||  !password) {
        return res.status(400).send('All fields are required');
    }

    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';

    con.query(checkEmailQuery,[email],(error,result)=>{
       
        if(result.length >0){
            const user = bcrypt.compare(password,result[0].password);
            if(user){
                const token = jwt.sign({email},JWT_SECRET,{expiresIn:'30d'});
                res.status(200).json({success:true,token})
            }else{
                res.status(400).json({message:'wrong password'})
            }
        }else{
            res.status(400).json({message:"invalid email"})
        }

    })

})


app.listen(8081,function(req,res){
    console.log("connected to frontend")
})