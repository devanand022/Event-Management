import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, Table } from 'react-bootstrap'
import image from '../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'
import './AdminStaff.css'
import jwtDecode from 'jwt-decode'
import { staffEvents } from '../../../../actions/eventAction'
import { useDispatch, useSelector } from 'react-redux'

const AdminStaff = () => {
    const [show, setShow] = useState(false)
    const token = localStorage.getItem("userInfo")
    let decodetoken = jwtDecode(token);
    const dispatch = useDispatch()
    const event = localStorage.getItem("event")
    const { staffevent } = useSelector((state) => state.staffEventState)

    const deleve = () => {
        localStorage.removeItem("event");
    }

    const menuItem = [
        {
            path: "/admin/event/dashboard",
            icon: <MdIcons.MdDashboard size={25} className='m-2' />,
            name: "Dashboard"
        },
        {
            path: "/admin/event/prelims",
            icon: <FaIcons.FaClipboardList size={25} className='m-2' />,
            name: "Perlims"
        },
        {
            path: "/admin/event/final",
            icon: <MdIcons.MdEmojiEvents size={25} className='m-2' />,
            name: "Final"
        },
    ];

    useEffect(() => {
        dispatch(staffEvents(event))
    }, [dispatch])
    return (
        <Container fluid className='adminpage'>
            <Row>
                <Col>
                    <Card className="sidebar" style={{ height: '100vh', width: show ? '260px' : '80px', border: 'none' }}>
                        <Card
                            className='card-top'
                            style={{ height: '100px', border: '', width: show ? '260px' : '80px', flexDirection: 'row', border: 'none' }}
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
                            <Link to='/admin/dashboard'>
                                <Card
                                    className='card-items' onClick={deleve}
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
                    <Card style={{ height: '97vh', width: show ? '1065px' : '1249px', transition: 'ease-in-out 0.2s', border: 'none', alignItems: 'center' }}>
                        <Card style={{ height: '85vh', width: '97%', border: 'none' }}>
                            <h3 className='mx-3 my-3'>Student List</h3>
                            <Card style={{ height: '85vh', width: '100%', display: 'flex', alignItems: 'center', border: 'none' }}>
                                <Table striped borderless hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Lot No</th>
                                            <th>Email</th>
                                            <th>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            staffevent && staffevent.map(x => (
                                                <tr>
                                                    <td>{x.id}</td>
                                                    <td>{x.name}</td>
                                                    <td>{x.lot_no}</td>
                                                    <td>{x.email}</td>
                                                    {
                                                        x.event1 == event ? <td>{x.event1}</td> : <td>{x.event2}</td>
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Card>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminStaff