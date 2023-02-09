import React from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'
import './CollegeTab2.css'

const CollegeTab2 = ({show}) => {
  return (
    <Card style={{ width: '100%', height: '88vh', border: 'none' }}>
      <h2 style={{ marginLeft: '10px' }}>College Details</h2>
        <Form className="mb-3 mx-2 my-2 top-college-search">
          <Form.Group className='col-4'>
            <Form.Control placeholder='Enter the College Name' />
          </Form.Group>
        </Form>
        <Card style={{ width: '100%', height: '70vh', border: 'none' }} className="collegetable">
          <Table striped borderless hover style={{ width: show ? '1000px' : '1200px' }}>
            <thead>
              <tr>
                <th>Lot No</th>
                <th>College Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jamal Mohammed College</td>
                <td>
                  <div className="d-flex buttong">
                    <Button variant="info">View</Button>
                    <Button>Edit</Button>
                    <Button variant="warning">UnVerify</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Jamal Mohammed College</td>
                <td>
                  <div className="d-flex buttong">
                    <Button variant="info">View</Button>
                    <Button>Edit</Button>
                    <Button variant="warning">UnVerify</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Jamal Mohammed College</td>
                <td>
                  <div className="d-flex buttong">
                    <Button variant="info">View</Button>
                    <Button>Edit</Button>
                    <Button variant="warning">UnVerify</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Jamal Mohammed College</td>
                <td>
                  <div className="d-flex buttong">
                    <Button variant="info">View</Button>
                    <Button>Edit</Button>
                    <Button variant="warning">UnVerify</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Jamal Mohammed College</td>
                <td>
                  <div className="d-flex buttong">
                    <Button variant="info">View</Button>
                    <Button>Edit</Button>
                    <Button variant="warning">UnVerify</Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
    </Card>
  )
}

export default CollegeTab2