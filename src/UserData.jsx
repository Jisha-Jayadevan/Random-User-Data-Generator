import React, {useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function UserData() {
    const [user, setUser] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('');
    const colors = ['#29ADB2','#ff6347','#dda0dd', '#FF9800','#F99B7D','#8fbc8f', '#FFFF00','#ff00ff','#9370db','#9681EB','#32cd32']; // Add or modify colors as needed


    useEffect(() => { generateUser() }, [])

    const generateUser = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/users');
            const allUsers = response.data;
            const len=allUsers.users.length
            if (len > 0) {
                const randomIndex = Math.floor(Math.random() * len);
                const randomUser = allUsers.users[randomIndex];
                setUser(randomUser);
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                setBackgroundColor(randomColor);
            } else {
                console.error('User data array is empty');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    return (
        <>
            <div style={{ backgroundColor: backgroundColor}} className='border border-5 border-tertiary rounded m-2 p-3 shadow'>
                <Row className='d-flex align-items-center justify-content-between 'style={{ backgroundColor: backgroundColor}}>
                    <Col style={{ backgroundColor: backgroundColor}}>
                        <Row style={{ height: '140px', backgroundColor: backgroundColor }} className='w-100 text-center' >
                            <Image style={{ width: '100px', height: '90px' }} className='m-1' src={user?user.image:"not found"} roundedCircle />
                            <div style={{ width: '180px', height: '110px', backgroundColor: backgroundColor }} className='d-flex flex-column justify-content-center align-items-center p-1'>
                                <Form.Control type="text" placeholder="Name" style={{ fontSize: '18px', backgroundColor: backgroundColor }} className='border-0 p-0 fw-bolder' value={user?user.firstName+" "+user.lastName:null}/>
                                <Form.Control type="text" placeholder="Gender+bloodgroup" style={{ fontSize: '13px' , backgroundColor: backgroundColor}} className='border-0 p-0 fw-bolder' value={user?user.gender+", "+user.bloodGroup+" blood group":null}/>
                                <Form.Control type="text" placeholder="Ph No" style={{ fontSize: '13px', backgroundColor: backgroundColor }} className='border-0 p-0 fw-bolder mt-2' value={user?user.phone:null}/>
                                <Form.Control type="text" placeholder="Email Id" style={{ fontSize: '13px', backgroundColor: backgroundColor }} className='border-0 p-0 fw-bolder' value={user?user.email:null}/>
                            </div>
                        </Row>
                        <Row className='mt-1' style={{ backgroundColor: backgroundColor}}>
                            <Col style={{ backgroundColor: backgroundColor}}>
                                <div style={{ backgroundColor: backgroundColor}}>
                                    <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="dob" className='mb-0 fw-bolder'>Birth Date</Form.Label>
                                    <Form.Control style={{ backgroundColor: backgroundColor}}  type="text" id="dob" className='mb-4 border border-2' readOnly value={user?user.birthDate:null}/>
                                </div>
                                <div style={{ backgroundColor: backgroundColor}}>
                                    <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="wgt" className='mb-0 fw-bolder'>Weight</Form.Label>
                                    <Form.Control style={{ backgroundColor: backgroundColor}} type="text" id="wgt" className='mb-4 border border-2' readOnly value={user?user.weight:null} />
                                </div>

                            </Col>
                            <Col style={{ backgroundColor: backgroundColor}}>
                                <div style={{ backgroundColor: backgroundColor}}>
                                    <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="age" className='mb-0 fw-bolder'>Age</Form.Label>
                                    <Form.Control style={{ backgroundColor: backgroundColor}} type="text" id="age" className='mb-4 border border-2' readOnly  value={user?user.age:null}/>
                                </div>
                                <div style={{ backgroundColor: backgroundColor}}>
                                    <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="hgt" className='mb-0 fw-bolder'>Height</Form.Label>
                                    <Form.Control style={{ backgroundColor: backgroundColor}} type="text" id="hgt" className='mb-4 border border-2' readOnly value={user?user.height:null}/>
                                </div>
                            </Col>
                        </Row>
                        <div style={{ backgroundColor: backgroundColor}} className='text-center mt-1'><Button variant="success" type='submit' onClick={generateUser}>Refresh</Button></div>
                    </Col>
                    <Col className='mt-4' style={{ backgroundColor: backgroundColor}}>
                        <div style={{ backgroundColor: backgroundColor}}>
                            <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="address" className='mb-0 fw-bolder'>Home Address</Form.Label>
                            {/* <Form.Control style={{ backgroundColor: backgroundColor}} type="text" id="address" className='mb-4 border border-2' readOnly value={user?user.address.address+" "+user.address.city+" "+user.address.state:null}/> */}
                            <Form.Control as="textarea" rows={2} style={{ backgroundColor: backgroundColor}}  id="address" className='mb-4 border border-2' readOnly value={user?user.address.address+" "+user.address.city+" "+user.address.state:null}/>
                        </div>
                        <div style={{ backgroundColor: backgroundColor}}>
                            <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="code" className='mb-0 fw-bolder'>Postal Code</Form.Label>
                            <Form.Control style={{ backgroundColor: backgroundColor}} type="text" id="code" className='mb-4 border border-2' readOnly value={user?user.address.postalCode:null}/>
                        </div>
                        <div style={{ backgroundColor: backgroundColor}}>
                            <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="company" className='mb-0 fw-bolder'>Company</Form.Label>
                            <Form.Control style={{ backgroundColor: backgroundColor}} type="text" id="company" className='mb-4 border border-2' readOnly value={user?user.company.name:null}/>
                        </div>
                        <div style={{ backgroundColor: backgroundColor}}>
                            <Form.Label style={{ backgroundColor: backgroundColor}} htmlFor="title" className='mb-0 fw-bolder'>Job Title</Form.Label>
                            <Form.Control  style={{ backgroundColor: backgroundColor}} type="text" id="title" className='mb-4 border border-2' readOnly value={user?user.company.title:null}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default UserData