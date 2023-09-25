import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import  jwt  from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const salt = 10

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors(
  {
    origin: ["http://localhost:5173"],
    methods: ["POST, GET"],
    credentials: true
  }
))

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'WILIETE123',
  database: 'signup'
})

const verifyUser = (req, res, next) => {
  const token = req.cookies.token
  if(!token) {
    return res.json({Message: "We need token please provide it."})
  } else{
      jwt.verify(token, 'our-jsonwebtoken-secret-key', (err, decoded) => {
        if(err) {
          return res.json({Message: "Authentication Error."})
        } else {
          req.name = decoded.name
          next()
        }
      })
  }
}

app.get('/', verifyUser, (req, res) => {
  return res.json({Status: "Success",  name: req.name})
})

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM login WHERE email = ?'
  
  db.query(sql, [req.body.email], (err, data) => {    
    if(err) return res.json({Message: 'Server Side Error'})
    if(data.length > 0 ){
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
        if(err) return res.json({Error: "Password compare error"})
        if(response) {
          const name = data[0].name
          const token = jwt.sign({ name }, 'our-jsonwebtoken-secret-key', {expiresIn: '1d'})
          res.cookie('token', token)
          return res.json({ Status: 'Success' })
        } else{
          return res.json({Error: 'Password not matched'})
        }
      })
    }else{
      return res.json({Message: "No email existed"})
      
    }
  })
})

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({Message: "Success"})
})

app.post('/register', (req, res) => {
  const sql = 'INSERT INTO login (`name`, `email`, `password`) VALUES (?)'

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      console.error('Erro ao criar hash da senha:', err)
      return res.json({ Error: 'Erro ao criar hash da senha' })
    }

    const values = [req.body.name, req.body.email, hash]

    db.query(sql, [values], (err, data) => {
      if (err) {
        console.error('Erro ao inserir dados no banco de dados:', err)
        return res.json({ Error: 'Erro ao inserir dados no servidor' })
      }

      console.log('Dados inseridos com sucesso no banco de dados')
      return res.json({ Status: 'Sucesso' })
    })
  })
})


app.listen(8001, ()=> {
  console.log('Servidor Rodando na porta 8001')
})