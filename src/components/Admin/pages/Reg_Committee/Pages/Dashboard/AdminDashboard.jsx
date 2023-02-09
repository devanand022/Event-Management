import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'

const AdminDashboard = ({show}) => {
  return (
    <Card style={{height: '97vh', width: show?'1075px': '1255px', transition: 'ease-in-out 0.2s', border: 'none'}} className="dashcontent">
        <Row style={{width: show?'1075px': '1255px', transition: 'ease-in-out 0.2s', flexDirection: 'row'}} className='dashtop'>
          <Col md={3}>
            <Link to='/admin/reg/add' style={{textDecoration: 'none', color: 'black'}}>
              <Card className='dashcards' style={{height: '200px'}}>
                <h4 className='mx-3 my-2'>Add</h4>
                <h4><IoIcons.IoMdAdd size={40} /></h4>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to='/admin/reg/college' style={{textDecoration: 'none', color: 'black'}}>
              <Card className='dashcards' style={{height: '200px'}}>
                <h4 className='mx-3 my-2'>College</h4>
                <h4>12</h4>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to='/admin/reg/participate' style={{textDecoration: 'none', color: 'black'}}>
              <Card className='dashcards' style={{height: '200px'}}>
                <h4 className='mx-3 my-2'>Participates</h4>
                <h4>30</h4>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row style={{width: show?'1075px': '1255px', transition: 'ease-in-out 0.2s'}} className='dashtop'>
          <Col>
            <Card className='dashseccards' style={{height: '320px', width: show? '600px': '700px'}}>

            </Card>
          </Col>
          <Col>
            <Card className='dashseccards' style={{height: '320px'}}>

            </Card>
          </Col>
        </Row>
      </Card>   
  )
}

export default AdminDashboard