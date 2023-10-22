import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col, Table, Button } from 'react-bootstrap'
import image from '../../../../../../Assets/Images/download.jfif'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import './AdminParticipates.css'
import { useDispatch, useSelector } from 'react-redux'
import { delSingleParticipate, getParticipate } from '../../../../../../actions/participateAction'
import jwtDecode from 'jwt-decode'

const AdminParticipates = () => {

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { participate } = useSelector((state) => state.getParticipateState);
  const token = localStorage.getItem("userInfo")
  let decodetoken = jwtDecode(token);

  const del = (id) => {
    dispatch(delSingleParticipate(id));
    setTimeout(() => dispatch(getParticipate), 500);
  }

  useEffect(() => {
    dispatch(getParticipate);
  }, [dispatch])

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
  return (
    <Container fluid className='partpage'>
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
          <Card style={{ height: '97vh', width: show ? '1075px' : '1255px', transition: 'ease-in-out 0.2s', border: 'none' }} className="partcontent">
            <h2 className='m-2'>Particiaptes Details</h2>
            <Card style={{ width: '100%', height: '78vh', border: 'none', overflowY: 'scroll' }} className='participatetable'>
              <Table striped borderless hover style={{ width: show ? '1050px' : '1230px' }}>
                <thead>
                  <tr>
                    <th>Lot No</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Event</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {participate && participate.map(x => (
                    <tr>
                      <td>{x.lot_no}</td>
                      <td>{x.name}</td>
                      <td>{x.phone}</td>
                      <td>{x.email}</td>
                      <td>
                        <div className="d-flex flex-column">
                          <span>{x.event1}</span>
                          <span>{x.event2}</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-evenly">
                        <Link to={`/reg/edit/participate/${x.id}`}><Button>Edit</Button></Link>
                          <Button variant="danger" onClick={() => del(x.id)}>Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default AdminParticipates