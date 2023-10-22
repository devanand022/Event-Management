import React, { useState } from 'react'
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './Toggle.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Toggle = () => {

    const [show, setShow] = useState(false);

    return (
        <Container fluid>
            <Row className="wrapper">
                <Col md={6} className="d-sm-block d-none">

                </Col>
                <Col md={6} className="right">
                    <Card className="p-3 col-md-8 card">
                        <div className="actionbtns mb-5 mt-3">
                            <button className="actionbtn signupbtn" data-testid="Signupbutton" onClick={() => setShow(false)}>Signup</button>
                            <button className="actionbtn loginbtn" onClick={() => setShow(true)}>Login</button>
                            <button
                                style={{ transform: show ? 'translateX(98%)' : 'translateX(0)', transition: 'all 0.2s ease-in-out' }}
                                className="movebtn">
                                {show ?
                                    (<span>Login</span>) : (<span>Signup</span>)
                                }
                            </button>
                        </div>
                        {show ? (
                            <div >
                                <Login />
                            </div>
                        ) : (<div>
                            <Signup />
                        </div>)
                        }
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Toggle