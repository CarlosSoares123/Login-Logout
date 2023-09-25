import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){

  const [values, setValues] = useState({email:'', password: ''})
    
  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const handleSubmit= (e) => {
    e.preventDefault()

    axios.post('http://localhost:8001/login', values) 
    .then(res => {
      if(res.data.Status === "Success") {
        navigate('/')
      } else {
        alert(res.data.Message)
      }
    })
    .catch(err => console.log(err))
  }


  return(
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email" autoComplete="off"
            className="form-control rounded-0"
            onChange={e => setValues({...values, email: e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password"
              className="form-control rounded-0"
            onChange={e => setValues({...values, password: e.target.value})}
            />
          </div>

          <button className="btn btn-success w-100 rounded-0">Log in</button>
          <p>You are agree to aour terms and policies</p>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</button>
        </form>
      </div>
    </div>
  )
}