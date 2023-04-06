import React, { useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delCollege, getVerifiedCollege, unVerifyCollege } from '../../../../../../actions/collegeAction'
import { delParticipate, unVerifyParticipate } from '../../../../../../actions/participateAction'
import './CollegeTab1.css'

const CollegeTab1 = ({ show }) => {

    const dispatch = useDispatch();
    const { verifiedcolleges } = useSelector((state) => state.getVerifiedCollegeState);

    const unverify = (id) => {
        dispatch(unVerifyCollege(id));
        dispatch(unVerifyParticipate(id));
        setTimeout(() => dispatch(getVerifiedCollege), 500);
      }

      const del = (id) => {
        dispatch(delCollege(id));
        dispatch(delParticipate(id));
        setTimeout(() => dispatch(getVerifiedCollege), 500);
      }

    useEffect(() => {
        dispatch(getVerifiedCollege);
    }, [dispatch])
    return (
        <Card style={{ width: '100%', height: '88vh', border: 'none' }}>
            <h2 style={{ marginLeft: '10px' }}>College Details</h2>
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
                        {verifiedcolleges && verifiedcolleges.map(x => (
                            <tr>
                                <td>{x.lot_no}</td>
                                <td>{x.college_name}</td>
                                <td>
                                    <div className="d-flex buttong">
                                        <Link to={`/reg/singlecollege/${x.lot_no}`}>
                                            <Button variant="info">View</Button>
                                        </Link>
                                        <Button variant="warning" onClick={() => unverify(x.lot_no)}>unVerify</Button>
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

export default CollegeTab1