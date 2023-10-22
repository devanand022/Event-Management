import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap'
import image from '../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Add.css'
import { createCollege, getCollege } from '../../../../actions/collegeAction'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { getEvent } from '../../../../actions/eventAction'
import { createParticipates } from '../../../../actions/participateAction'
import jwtDecode from 'jwt-decode'

const Add = () => {

  const [show, setShow] = useState(false);
  const { message } = useSelector((state) => state.collegeState);
  const { getColleges } = useSelector((state) => state.getCollegeState);
  const { getEvents } = useSelector((state) => state.getEventState);
  const { addmessage } = useSelector((state) => state.addState);
  const dispatch = useDispatch();
  const token = localStorage.getItem("userInfo")
  let decodetoken = jwtDecode(token);

  const logout = () => {
    localStorage.removeItem("userInfo")
  }
  const initialState = {
    name: "",
    college: "",
    email: "",
    phone: "",
    degree: "",
    session: "",
    event1: "",
    event2: ""
  }

  const [add, setAdd] = useState([initialState]);
  const [college_name, setCollege] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCollege(college_name));
    setCollege("")
  }

  const handleInputChange = (e, i) => {
    const inputdata = [...add]
    inputdata[i][e.target.name] = e.target.value;
    setAdd(inputdata);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createParticipates(add));
    setAdd([initialState]);
  }

  const handleClick = () => {
    setAdd([...add, { name: "", college: "", email: "", phone: "", degree: "", session: "", event1: "", event2: "" }]);
  }

  const handleRemove = index => {
    const list = [...add];
    list.splice(index, 1);
    setAdd(list);
  }

  useEffect(() => {
    if(message) {
      toast.info(message, {
        position: toast.POSITION.BOTTOM_CENTER
      })
      return
    }
    if(addmessage) {
      return toast.info(addmessage, {
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
    dispatch(getCollege);
    dispatch(getEvent);
  }, [dispatch, message, addmessage])

  const menuItem = [
    {
      path: "/reg/dashboard",
      icon: <MdIcons.MdDashboard size={25} className='m-2' />,
      name: "Dashboard"
    },
    {
      path: "/reg/add",
      icon: <IoIcons.IoMdAdd size={25} className='m-2' />,
      name: "Add"
    },
    {
      path: "/reg/college",
      icon: <FaIcons.FaUniversity size={25} className='m-2' />,
      name: "College"
    },
    {
      path: "/reg/participate",
      icon: <IoIcons.IoMdPerson size={25} className='m-2' />,
      name: "Participates"
    },
    {
      path: "/reg/event",
      icon: <MdIcons.MdEvent size={25} className='m-2' />,
      name: "Event"
    },
  ];

  return (
    <Container fluid className='addpage'>
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
                        <h5>{decodetoken.data[0]?.user_name}</h5>
                        <span>Reg Committee</span>
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
          <Card
            style={{ height: '97vh', width: show ? '1075px' : '1255px', transition: 'ease-in-out 0.2s', border: 'none' }}
            className="addcontent"
          >
            <h2 className='mx-3 my-2'>Add Participates</h2>
            <Form onSubmit={handleSubmit} className='justify-content-center align-items-center d-flex' style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="justify-content-center align-items-center d-flex add-top">
                <Form.Group className='mb-3 mt-2 add-top-group'>
                  <Form.Control placeholder='Enter Your College Name' value={college_name} onChange={e => setCollege(e.target.value)} style={{ width: '500px' }} />
                </Form.Group>
                <Form.Group className='mb-3 mt-2 m-2'>
                  <Button variant='none' type='submit' style={{ width: '150px', background: '#5544AE', color: 'white' }} >Add</Button>
                </Form.Group>
                <Form.Group className='mb-3 mt-2 add-top-group' style={{ justifyContent: 'flex-end', display: 'flex' }}>
                  <Button variant='none' style={{ width: '150px', background: '#5544AE', color: 'white' }} onClick={handleClick} >New</Button>
                </Form.Group>
              </div>
            </Form>
            <Form className='justify-content-center align-items-center d-flex' style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleFormSubmit}>
              <Card
                className='add-details'
                style={{ height: '430px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', overflowY: 'scroll' }}
              >
                {add.map((x, i) => {
                  return (
                    <Card
                      className='m-3'
                      style={{ width: '97%' }}
                    >
                      <Row className=''>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Control placeholder='Enter Your Name' name='name' value={x.name} onChange={e => handleInputChange(e, i)} />
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Select name='college' onChange={e => handleInputChange(e, i)}>
                              <option value=''>Select</option>
                              {
                                getColleges && getColleges.map(getCollege => (
                                  <option value={getCollege.lot_no}>{getCollege.college_name}</option>
                                ))
                              }
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Control type='email' placeholder='Enter Your Eamil Address' value={x.email} name="email" onChange={e => handleInputChange(e, i)} />
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Control placeholder='Enter Your Phone Number' value={x.phone} name='phone' onChange={e => handleInputChange(e, i)} />
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Select name='degree' onChange={e => handleInputChange(e, i)} >
                              <option value=''>Select</option>
                              <option name='ug' value='ug'>UG</option>
                              <option name='pg' value='Pg'>PG</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Select name='session' onChange={e => handleInputChange(e, i)} >
                              <option value=''>Select</option>
                              <option name='aided' value='aided'>Aided</option>
                              <option name='sf' value='sf'>SF</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2' onChange={e => handleInputChange(e, i)} >
                            <Form.Select name='event1'>
                              <option>Select</option>
                              {
                                getEvents && getEvents.map(getEvent => (
                                  <option value={getEvent.name}>{getEvent.name}</option>
                                ))
                              }
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          <Form.Group className='m-2'>
                            <Form.Select name='event2' onChange={e => handleInputChange(e, i)} >
                              <option>Select</option>
                              {
                                getEvents && getEvents.map(getEvent => (
                                  <option value={getEvent.name}>{getEvent.name}</option>
                                ))
                              }
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={show ? 4 : 3}>
                          {add.length !== 1 &&
                            <Form.Group className='m-2'>
                              <Button varient='danger' onClick={() => handleRemove(i)} >Remove</Button>
                            </Form.Group>
                          }
                        </Col>
                      </Row>
                    </Card>
                  )
                })}
              </Card>
              <div className="justify-content-end align-items-center d-flex add-top">
                <Form.Group className='mx-2 my-3' style={{ justifyContent: 'flex-end', display: 'flex' }}>
                  <Button variant='none' type='submit' style={{ width: '150px', background: '#5544AE', color: 'white' }}>Add</Button>
                </Form.Group>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default Add