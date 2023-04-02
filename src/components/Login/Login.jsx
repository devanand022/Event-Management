import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    if (role == 'participate'){
      
    }
    if (role == 'reg'){
      axios.post('http://localhost:5000/api/regloginuser', {email, password}).then((data) => {
        if(data.data.status == 200){
          localStorage.setItem("userInfo", data.data.token);
          const message = data.data.message;
          toast.info(message, {position: toast.POSITION.BOTTOM_CENTER})
          navigate('/reg/dashboard')
        }else{
          toast.error(data.data.message, {position: toast.POSITION.BOTTOM_CENTER})
        }
      })
    }
    if (role == 'staff'){
      axios.post('http://localhost:5000/api/staffloginuser', {email, password}).then((data) => {
        if(data.data.status == 200){
          localStorage.setItem("userInfo", data.data.token);
          const message = data.data.message;
          toast.info(message, {position: toast.POSITION.BOTTOM_CENTER})
          navigate('/event/dashboard')
        }else{
          toast.error(data.data.message, {position: toast.POSITION.BOTTOM_CENTER})
        }
      })
    }
    if (role == 'admin'){
      console.log(email, password);
      axios.post('http://localhost:5000/api/adminloginuser', {email, password}).then((data) => {
        if(data.data.status == 200){
          localStorage.setItem("userInfo", data.data.token);
          const message = data.data.message;
          toast.info(message, {position: toast.POSITION.BOTTOM_CENTER})
          navigate('/admin/dashboard')
        }else{
          toast.error(data.data.message, {position: toast.POSITION.BOTTOM_CENTER})
        }
      })
    }
  }


  return (
    <Form className='login' onSubmit={loginSubmit}>
      <Form.Group className='d-flex col-10 mb-4'>
        <Form.Label className='m-2'>Role:</Form.Label>
        <Form.Select onChange={e => setRole(e.target.value)}>
          <option>Select</option>
          <option value="participate">Participate</option>
          <option value="reg">Reg Committee</option>
          <option value="staff">Staff Event</option>
          <option value="admin">Admin</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type='text' placeholder='Enter Your Email Address or Username' value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type='password' placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <div className="mt-4 text-center">
        <Button type="submit" variant="none" style={{ background: '#5544AE', color: 'white' }}>Login</Button>
      </div>
    </Form>
  )
}

export default Login