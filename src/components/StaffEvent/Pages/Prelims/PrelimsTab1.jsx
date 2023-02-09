import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'

const PrelimsTab1 = () => {
    return (
        <Card style={{ height: '88vh', width: '100%', alignItems: 'center', display: 'flex', border: 'none' }}>
            <Card style={{ height: '85vh', width: '97%', border: 'none' }}>
                <h3 className='mx-3 my-3'>Final</h3>
                <Card style={{ height: '85vh', width: '100%', display: 'flex', alignItems: 'center', border: 'none' }}>
                    <Table striped borderless hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>College Name</th>
                                <th>Email</th>
                                <th>Event</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Devanand</td>
                                <td>Jamal mohammed college</td>
                                <td>ananddeva345@gmail.com</td>
                                <td>Event 1</td>
                                <td>
                                    <Button>Select</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>Devanand</td>
                                <td>Jamal mohammed college</td>
                                <td>ananddeva345@gmail.com</td>
                                <td>Event 1</td>
                                <td>
                                    <Button>Select</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>Devanand</td>
                                <td>Jamal mohammed college</td>
                                <td>ananddeva345@gmail.com</td>
                                <td>Event 1</td>
                                <td>
                                    <Button>Select</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>Devanand</td>
                                <td>Jamal mohammed college</td>
                                <td>ananddeva345@gmail.com</td>
                                <td>Event 1</td>
                                <td>
                                    <Button>Select</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>Devanand</td>
                                <td>Jamal mohammed college</td>
                                <td>ananddeva345@gmail.com</td>
                                <td>Event 1</td>
                                <td>
                                    <Button>Select</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>Devanand</td>
                                <td>Jamal mohammed college</td>
                                <td>ananddeva345@gmail.com</td>
                                <td>Event 1</td>
                                <td>
                                    <Button>Select</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Card>
        </Card>
    )
}

export default PrelimsTab1