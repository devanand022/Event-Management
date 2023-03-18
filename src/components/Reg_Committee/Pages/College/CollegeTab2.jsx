import React, { useEffect } from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUnVerifiedCollege, verifyCollege, delCollege } from '../../../../actions/collegeAction'
import { VerifyParticipate, delParticipate } from '../../../../actions/participateAction'
import './CollegeTab2.css'

const CollegeTab2 = ({ show }) => {

  const dispatch = useDispatch();
  const { unverifiedcolleges } = useSelector((state) => state.getUnVerifiedCollegeState);

  const verify = (id) => {
    dispatch(verifyCollege(id));
    dispatch(VerifyParticipate(id));
    setTimeout(() => dispatch(getUnVerifiedCollege), 500)
  }

  const del = (id) => {
    dispatch(delCollege(id));
    dispatch(delParticipate(id));
    setTimeout(() => dispatch(getUnVerifiedCollege), 500);
  }

  useEffect(() => {
    dispatch(getUnVerifiedCollege);
  }, [dispatch])

  return (
    <Card style={{ width: '100%', height: '88vh', border: 'none' }}>
      <h2 style={{ marginLeft: '10px' }}>College Details</h2>
      <Card style={{ width: '100%', height: '70vh', border: 'none', overflowY: 'scroll' }} className="collegetable">
        <Table striped borderless hover style={{ width: show ? '1000px' : '1200px' }}>
          <thead>
            <tr>
              <th>Lot No</th>
              <th>College Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {unverifiedcolleges && unverifiedcolleges.map(x => (
              <tr>
                <td>{x.lot_no}</td>
                <td>{x.college_name}</td>
                <td>
                  <div className="d-flex buttong">
                    <Link to={`/reg/singlecollege/${x.lot_no}`}>
                      <Button variant="info">View</Button>
                    </Link>
                    <Button onClick={() => verify(x.lot_no)} variant="success">Verify</Button>
                    <Button variant="danger" onClick={() => del(x.lot_no)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Card>
  )
}

export default CollegeTab2