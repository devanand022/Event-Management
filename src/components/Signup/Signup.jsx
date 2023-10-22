import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Signup = () => {

    const [college_name, setCollege_name] = useState("");
    const [email, setEmail] = useState("");
    const [depart, setDepart] = useState("");
    const [password, setPassword] = useState("");

    const singupform = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/reguser', { college_name, email, depart, password })
            .then(res => {
                const message = "successfully Registered";
                setCollege_name("");
                setEmail("");
                setDepart("");
                setPassword("");
                return toast.info(message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            })
            .catch(error => {
                return toast.info(error, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            });
    }

    return (
        <Form onSubmit={singupform}>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Your College Name" name="college_name" value={college_name} onChange={e => setCollege_name(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter Your Email Address" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Your Department Name" name="Department" value={depart} onChange={e => setDepart(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Enter Your New Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <div className="mt-4 text-center">
                <Button type="submit" variant="none" style={{ background: '#5544AE', color: 'white' }} data-testid="Signup" >Signup</Button>
            </div>
        </Form>
    )
}

export default Signup