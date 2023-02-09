import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Your College Name" name="college_name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter Your Email Address" name="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Your Department Name" name="Department" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Enter Your New Password" name="password" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Confirm Your Password" name="cpassword" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-evenly mb-3">
                <Form.Group className="col-3">
                    <Form.Check label="UG" name="ug/pg" type="radio" />
                    <Form.Check label="PG" name="ug/pg" type="radio" />
                </Form.Group>
                <Form.Group className="col-3">
                    <Form.Check label="SF" name="sf/aided" type="radio" />
                    <Form.Check label="Aided" name="sf/aided" type="radio" />
                </Form.Group>
            </Form.Group>
            <div className="mt-4 text-center">
                <Link to="participate/dashboard">
                    <Button type="submit" variant="none" style={{background: '#5544AE', color: 'white'}}>Signup</Button>
                </Link>
            </div>
        </Form>
    )
}

export default Signup