import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import * as IoIcons from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { countCollege } from '../../../../../../actions/collegeAction'
import { countParticipate } from '../../../../../../actions/participateAction'
import './Dashboard.css'

const Dashboard = ({show}) => {

  const dispatch = useDispatch();
  const { participatecount } = useSelector((state) => state.countParticipateState);
  const { collegecount } = useSelector((state) => state.countCollegeState);
  const [pname, setPname] = useState("");
  const [cname, setCname] = useState("");

  useEffect(() => {
    dispatch(countCollege);
    dispatch(countParticipate);
  }, [dispatch]);

  useEffect(() =>{
    participatecount && participatecount.map(x => (
      setPname(x.pname)
    ));

    collegecount && collegecount.map(x => (
      setCname(x.cname)
    ))
  }, [participatecount, collegecount])

  return (
    <Card style={{height: '97vh', width: show?'1075px': '1255px', transition: 'ease-in-out 0.2s', border: 'none'}} className="dashcontent">
        <Row style={{width: show?'1075px': '1255px', transition: 'ease-in-out 0.2s', flexDirection: 'row'}} className='dashtop'>
          <Col md={3}>
            <Link to='/reg/add' style={{textDecoration: 'none', color: 'black'}}>
              <Card className='dashcards' style={{height: '200px'}}>
                <h4 className='mx-3 my-2'>Add</h4>
                <h4><IoIcons.IoMdAdd size={40} /></h4>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to='/reg/college' style={{textDecoration: 'none', color: 'black'}}>
              <Card className='dashcards' style={{height: '200px'}}>
                <h4 className='mx-3 my-2'>College</h4>
                <h4>{cname}</h4>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to='/reg/participate' style={{textDecoration: 'none', color: 'black'}}>
              <Card className='dashcards' style={{height: '200px'}}>
                <h4 className='mx-3 my-2'>Participates</h4>
                <h4>{pname}</h4>
              </Card>
            </Link>
          </Col>
        </Row>
      </Card>   
  )
}

export default Dashboard