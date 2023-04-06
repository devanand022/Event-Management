import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import image from '../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Adminpage.css'
import jwtDecode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { countCollege } from '../../actions/collegeAction'
import { countParticipate } from '../../actions/participateAction'

const Adminpage = () => {
    const [show, setShow] = useState(false)
    const token = localStorage.getItem("userInfo")
    let decodetoken = jwtDecode(token);
    // const event = decodetoken.data[0]?.event

    const logout = () => {
        localStorage.removeItem("userInfo")
    }

    const dispatch = useDispatch();
    const { participatecount } = useSelector((state) => state.countParticipateState);
    const { collegecount } = useSelector((state) => state.countCollegeState);
    const [pname, setPname] = useState("");
    const [cname, setCname] = useState("");

    useEffect(() => {
        dispatch(countCollege);
        dispatch(countParticipate);
    }, [dispatch]);

    useEffect(() => {
        participatecount && participatecount.map(x => (
            setPname(x.pname)
        ));

        collegecount && collegecount.map(x => (
            setCname(x.cname)
        ))
    }, [participatecount, collegecount])

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
            path: "/admin/event/select",
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
                        <Row style={{ width: show ? '1075px' : '1255px', transition: 'ease-in-out 0.2s', flexDirection: 'row' }} className='dashtop'>
                            <Col md={3}>
                                <Link to='/admin/reg/add' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className='dashcards' style={{ height: '200px' }}>
                                        <h4 className='mx-3 my-2'>Add</h4>
                                        <h4><IoIcons.IoMdAdd size={40} /></h4>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md={3}>
                                <Link to='/admin/reg/college' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className='dashcards' style={{ height: '200px' }}>
                                        <h4 className='mx-3 my-2'>College</h4>
                                        <h4>{cname}</h4>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md={3}>
                                <Link to='/admin/reg/participate' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className='dashcards' style={{ height: '200px' }}>
                                        <h4 className='mx-3 my-2'>Participates</h4>
                                        <h4>{pname}</h4>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row style={{ width: show ? '1075px' : '1255px', transition: 'ease-in-out 0.2s' }} className='dashtop'>

                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Adminpage