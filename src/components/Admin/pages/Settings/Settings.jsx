import React, { useState } from 'react'
import { Col, Container, Row, Card, Tabs, Tab } from 'react-bootstrap'
import image from '../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Settings.css'
import Event from './tabs/Event'
import RegUser from './tabs/RegUser'
import StaffUser from './tabs/StaffUser'
import jwtDecode from 'jwt-decode'

const Adminpage = () => {
    const [show, setShow] = useState(false)
    const token = localStorage.getItem("userInfo")
    let decodetoken = jwtDecode(token);
    // const event = decodetoken.data[0]?.event;

    const logout = () => {
        localStorage.removeItem("userInfo")
      }

    const menuItem = [
        {
            path: "/admin/dashboard",
            icon: <MdIcons.MdDashboard size={25} className='m-2' />,
            name: "Dashboard"
        },
        {
            path: "/admin/reg/dashboard",
            icon: <FaIcons.FaCashRegister size={25} className='m-2' />,
            name: "Registration"
        },
        {
            path: "/admin/event/dashboard",
            icon: <MdIcons.MdEvent size={25} className='m-2' />,
            name: "Event Management"
        },
        {
            path: "/admin/settings",
            icon: <FiIcons.FiSettings size={25} className='m-2' />,
            name: "Settings"
        }
    ];
    return (
        <Container fluid className='adminpage'>
            <Row>
                <Col>
                    <Card className="sidebar" style={{ height: '100vh', width: show ? '260px' : '80px', border: 'none' }}>
                        <Card
                            className='card-top'
                            style={{ height: '100px', width: show ? '260px' : '80px', flexDirection: 'row', border: 'none' }}
                        >
                            {
                                show ?
                                    (
                                        <Card className='card-top' style={{ width: '220px', height: '80px', flexDirection: 'row', border: 'none' }}>
                                            <Card className="m-2 card-img" style={{ width: '50px', border: 'none' }}>
                                                <img src={image} alt="profile" style={{ borderRadius: '100%', height: '40px', width: '40px' }} />
                                            </Card>
                                            <Card className="m-2" style={{ width: '150px', border: 'none' }}>
                                                <h5>{decodetoken.data[0]?.username}</h5>
                                                <span>Admin</span>
                                            </Card>
                                        </Card>
                                    ) : null
                            }
                            <Card className='bars' style={{ height: '40px', border: 'none' }}>
                                <FaIcons.FaBars size={25} onClick={() => setShow(!show)} />
                            </Card>
                        </Card>
                        <Card className='card-middle' style={{ width: show ? '260px' : '80px', height: '470px', border: 'none' }}>
                            {
                                menuItem.map((item, index) => (
                                    <Link to={item.path} key={index}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Card
                                            className='card-items'
                                            style={{ display: 'flex', flexDirection: 'row', width: show ? '230px' : '45px', border: 'none' }}
                                        >
                                            {item.icon}
                                            {show ?
                                                (<h6 className='mx-2 my-2'>{item.name}</h6>) : null
                                            }
                                        </Card>
                                    </Link>
                                ))
                            }
                        </Card>
                        <Card className='card-end' style={{ width: show ? '260px' : '80px', height: '79px', border: 'none' }}>
                            <Link to='/'>
                                <Card
                                    className='card-items' onClick={logout}
                                    style={{ height: '45px', display: 'flex', flexDirection: 'row', width: show ? '230px' : '45px', border: 'none ' }}
                                >
                                    <MdIcons.MdLogout size={25} className='m-2' />
                                    {show ?
                                        (<h6 className='mx-2 my-2'>Logout</h6>) : null
                                    }
                                </Card>
                            </Link>
                        </Card>
                    </Card>
                </Col>
                <Col className='rightside'>
                    <Card style={{ height: '97vh', width: show ? '1075px' : '1255px', transition: 'ease-in-out 0.2s', border: 'none' }} className="dashcontent">
                        <Tabs defaultActiveKey = "event" className='mb-3' style={{background: '#FFFA65'}}>
                            <Tab eventKey="event" title="Event" style={{borderRadius: '10px'}}>
                                <Event />
                            </Tab>
                            <Tab eventKey="reguser" title="Reg User" style={{borderRadius: '10px'}}>
                                <RegUser />
                            </Tab>
                            <Tab eventKey="staffuser" title="Staff User" style={{borderRadius: '10px'}}>
                                <StaffUser />
                            </Tab>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Adminpage