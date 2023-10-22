import React, { useState } from 'react'
import { Col, Container, Row, Card, Tabs, Tab } from 'react-bootstrap'
import image from '../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'
import FinalsTab1 from './FinalsTab1'
import FinalsTab2 from './FinalsTab2'
import jwtDecode from 'jwt-decode'

const Finals = () => {
    const [show, setShow] = useState(false)
    const token = localStorage.getItem("userInfo")
    let decodetoken = jwtDecode(token);
    const event = decodetoken.data[0]?.event;

    const logout = () => {
        localStorage.removeItem("userInfo")
    }

    const menuItem = [
        {
            path: "/event/dashboard",
            icon: <MdIcons.MdDashboard size={25} className='m-2' />,
            name: "Dashboard"
        },
        {
            path: "/event/prelims",
            icon: <FaIcons.FaClipboardList size={25} className='m-2' />,
            name: "Perlims"
        },
        {
            path: "/event/final",
            icon: <MdIcons.MdEmojiEvents size={25} className='m-2' />,
            name: "Final"
        },
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
                                                <span>{event}</span>
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
                    <Card style={{ height: '97vh', width: show ? '1065px' : '1249px', transition: 'ease-in-out 0.2s', border: 'none' }}>
                        <Tabs defaultActiveKey="final" className='mb-3' style={{ background: '#FFFA65' }}>
                            <Tab eventKey="final" title="Final" style={{ borderRadius: '10px' }}>
                                <FinalsTab1 />
                            </Tab>
                            <Tab eventKey="final_list" title="Final List" style={{ borderRadius: '10px' }}>
                                <FinalsTab2 />
                            </Tab>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Finals