import React from 'react'
import { Card, Form, Button, Table } from 'react-bootstrap'

const StaffUser = () => {
  return (
    <Card style={{width: '100%', height: '88vh', border: 'none', alignItems: 'center', display: 'flex'}}>
      <Card style={{width: '97%', height: '20vh', border: 'none'}}>
        <h3 className='mx-4 my-3'>Add Users</h3>
        <Form style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Form.Group style={{width: '26%'}}>
            <Form.Control placeholder="Enter the Username" />
          </Form.Group>
          <Form.Group style={{width: '26%'}}>
            <Form.Control placeholder="Enter the Username" />
          </Form.Group>
          <Form.Group style={{width: '26%'}}>
            <Form.Control placeholder="Enter the Username" />
          </Form.Group>
          <Button style={{width: '10%'}}>Add</Button>
        </Form>
      </Card>
      <Card style={{width: '97%', height: '68vh', border: 'none'}}>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Staff User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Staff1</td>
              <td>
                <Button variant="success" style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
            <tr>
              <td>Staff1</td>
              <td>
                <Button variant="danger" style={{width: '20%'}}>InActive</Button>
              </td>
            </tr>
            <tr>
              <td>Staff1</td>
              <td>
                <Button variant="success" style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
            <tr>
              <td>Staff1</td>
              <td>
                <Button variant="success" style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default StaffUser