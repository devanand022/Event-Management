import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { activeRegs, addReguser, getReguser, inactiveRegs } from '../../../../../actions/eventAction';

const RegUser = () => {

  const dispatch = useDispatch()
  const { reguser } = useSelector((state) => state.getReguserState);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const addReg_user = (e) => {
    e.preventDefault();
    dispatch(addReguser(user, pass));
    setPass("");
    setUser("");
    setTimeout(() => dispatch(getReguser), 500);
  }

  const inactiveReg = (id) => {
    dispatch(inactiveRegs(id));
    setTimeout(() => dispatch(getReguser), 500);
  }

  const activeReg = (id) => {
    dispatch(activeRegs(id));
    setTimeout(() => dispatch(getReguser), 500);
  }

  useEffect(() => {
    dispatch(getReguser);
  }, [dispatch])

  return (
    <Card style={{ width: '100%', height: '88vh', display: 'flex', alignItems: 'center', border: 'none' }}>
      <Card style={{ width: '97%', height: '17vh', border: 'none' }}>
        <h3 className='mx-4 my-2 mb-3'>Add Users</h3>
        <Form style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} onSubmit={addReg_user}>
          <Form.Group style={{ width: '42%' }}>
            <Form.Control placeholder='Enter the User Name' value={user} onChange={e => setUser(e.target.value)} />
          </Form.Group>
          <Form.Group style={{ width: '42%' }}>
            <Form.Control placeholder='Create the Password' value={pass} onChange={e => setPass(e.target.value)} />
          </Form.Group>
          <Button style={{ width: '10%' }} type="submit" >Add</Button>
        </Form>
      </Card>
      <Card style={{ width: '97%', height: '50vh', border: 'none', overflowY: 'scroll' }}>
        <Table striped hover borderless>
          <thead>
            <tr>
              <td>UserName</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {
              reguser && reguser.map(x => (
                <tr>
                  <td>{x.user_name}</td>
                  {x.status === '1' ?
                    <td><Button variant='success' onClick={() => inactiveReg(x.id)} style={{ width: '20%' }}>Active</Button></td> :
                    <td><Button variant='danger' onClick={() => activeReg(x.id)} style={{ width: '20%' }}>inActive</Button></td>}
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default RegUser