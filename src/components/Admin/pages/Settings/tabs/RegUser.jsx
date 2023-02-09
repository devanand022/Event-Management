import React from 'react'
import { Card, Form, Button, Table } from 'react-bootstrap'

const RegUser = () => {
  return (
    <Card style={{width: '100%', height: '88vh', display: 'flex', alignItems: 'center', border: 'none'}}>
      <Card style={{width: '97%', height: '17vh', border: 'none'}}>
        <h3 className='mx-4 my-2 mb-3'>Add Users</h3>
        <Form style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Form.Group style={{width: '42%'}}>
            <Form.Control placeholder='Enter the User Name' />
          </Form.Group>
          <Form.Group style={{width: '42%'}}>
            <Form.Control placeholder='Create the Password' />
          </Form.Group>
          <Button style={{width: '10%'}}>Add</Button>
        </Form>
      </Card>
      <Card style={{width: '97%', height: '10vh', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', border: 'none'}}>
        <h4 className='mx-3 my-3'>Number of Participates in Team</h4>
        <Form style={{width: '25%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Form.Group style={{width: '50%'}}>
            <Form.Select>
              <option>Select</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </Form.Select>
          </Form.Group>
          <Button style={{width: '30%'}}>Set</Button>
        </Form>
      </Card>
      <Card style={{width: '97%', height: '10vh', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', border: 'none'}}>
        <h4 className='mx-3'>Registration</h4>
        <Form className='mx-5'>
          <Button variant='success'>Open</Button>
        </Form>
      </Card>
      <Card style={{width: '97%', height: '50vh', border: 'none'}}>
        <Table striped hover borderless>
          <thead>
            <tr>
              <td>UserName</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User1</td>
              <td>
                <Button variant='success' style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
            <tr>
              <td>User1</td>
              <td>
                <Button variant='success' style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
            <tr>
              <td>User1</td>
              <td>
                <Button variant='danger' style={{width: '20%'}}>InActive</Button>
              </td>
            </tr>
            <tr>
              <td>User1</td>
              <td>
                <Button variant='success' style={{width: '20%'}}>Active</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default RegUser