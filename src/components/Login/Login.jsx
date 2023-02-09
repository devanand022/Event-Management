import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Form className='login'>
      <Form.Group className='d-flex col-10 mb-4'>
        <Form.Label className='m-2'>Role:</Form.Label>
        <Form.Select>
          <option value="participate">Participate</option>
          <option value="reg">Reg Committee</option>
          <option value="staff">Staff Event</option>
          <option value="admin">Admin</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type='email' placeholder='Enter Your Email Address' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type='password' placeholder='Enter Your Password' />
      </Form.Group>
      <div className="mt-4 text-center">
        <Link to="reg/dashboard">
          <Button type="submit" variant="none" style={{background: '#5544AE', color: 'white'}}>Login</Button>
        </Link>
      </div>
    </Form>
  )
}

export default Login