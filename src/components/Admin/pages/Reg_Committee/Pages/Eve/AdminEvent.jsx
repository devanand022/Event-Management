import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col, Form, Table, Button } from 'react-bootstrap'
import image from '../../../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import './AdminEvent.css'
import { useDispatch, useSelector } from 'react-redux'
import { getEvent, selectEvent } from '../../../../../../actions/eventAction'
import jwtDecode from 'jwt-decode'

const AdminEvent = () => {

  const [show, setShow] = useState(false);
  const [event, setEvent] = useState("");
  const dispatch = useDispatch();
  const token = localStorage.getItem("userInfo")
  let decodetoken = jwtDecode(token);

  const Search = (e) => {
    e.preventDefault();
    dispatch(selectEvent(event));
  }

  const { getEvents } = useSelector((state) => state.getEventState);
  const { selectEvents } = useSelector((state) => state.selectEventState);

  const menuItem = [
    {
      path: "/admin/reg/dashboard",
      icon: <MdIcons.MdDashboard size={25} className='m-2' />,
      name: "Dashboard"
    },
    {
      path: "/admin/reg/add",
      icon: <IoIcons.IoMdAdd size={25} className='m-2' />,
      name: "Add"
    },
    {
      path: "/admin/reg/college",
      icon: <FaIcons.FaUniversity size={25} className='m-2' />,
      name: "College"
    },
    {
      path: "/admin/reg/participate",
      icon: <IoIcons.IoMdPerson size={25} className='m-2' />,
      name: "Participates"
    },
    {
      path: "/admin/reg/event",
      icon: <MdIcons.MdEvent size={25} className='m-2' />,
      name: "Event"
    },
  ];

  useEffect(() => {
    dispatch(getEvent);
  }, [dispatch])
  return (
    <Container fluid className='eventpage'>
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
              <Link to='/admin/dashboard'>
                <Card
                  className='card-items'
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
          <Card style={{ height: '97vh', width: show ? '1075px' : '1255px', transition: 'ease-in-out 0.2s', border: 'none' }} className="eventcontent">
            <h2 className='m-2'>Event Participates List</h2>
            <Card className="top_event mx-2 mt-4" style={{ border: 'none' }}>
              <Form className='d-flex' onSubmit={Search}>
                <Form.Select className='mb-3' style={{ width: '30%' }} value={event} onChange={e => setEvent(e.target.value)} >
                  <option>Select</option>
                  {
                    getEvents && getEvents.map(getEvent => (
                      <option value={getEvent.name}>{getEvent.name}</option>
                    ))
                  }
                </Form.Select>
                <Form.Group className='mx-2'>
                  <Button type='submit' >Search</Button>
                </Form.Group>
              </Form>
            </Card>
            <Card className="my-2 mx-2" style={{ width: show ? '1057px' : '1235px', height: '79vh', border: 'none' }}>
              <Table striped borderless hover>
                <thead>
                  <tr>
                    <th>Lot No</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    selectEvents && selectEvents.map(x => (
                      <tr>
                        <td>{x.lot_no}</td>
                        <td>{x.name}</td>
                        <td>{x.phone}</td>
                        <td>{x.email}</td>
                        <td>
                          <div className="d-flex flex-column">
                            <span>{event}</span>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default AdminEvent