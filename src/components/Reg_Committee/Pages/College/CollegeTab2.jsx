import React, { useEffect } from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUnVerifiedCollege } from '../../../../actions/collegeAction'
import './CollegeTab2.css'

const CollegeTab2 = ({ show }) => {

  const dispatch = useDispatch();
  const { unverifiedcolleges } = useSelector((state) => state.getUnVerifiedCollegeState);

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
                    <Button>Edit</Button>
                    <Button variant="success">Verify</Button>
                    <Button variant="danger">Delete</Button>
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