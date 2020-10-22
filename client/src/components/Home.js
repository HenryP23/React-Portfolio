import React from 'react'
import {Row, Col, Image, Button, Card, CardGroup, Container, Dropdown } from 'react-bootstrap';
import '../App.css';
import profilePic from '../images/0.jpg';
export default function home() {
    return (
        <>
        <CardGroup className = "mb-5">
            <Card className="homeCard">
                <Container >
                    <Card bg="light" text="light" border="dark" className="text-center mt-5 ml-5 mr-5" id="about">
                        <Card.Body className="color">
                            <Image src={profilePic} roundedCircle />
                            <Card.Title className="mt-2">About Me</Card.Title>
                            <Card.Text>
                                My name is Henry Parrish. I am a graduate of columbia state community college, with an assosiate degree in computer science. I have also love programming ever since I high, where I was able to take 2 years of it. In my spare time I like to develop game on unity. I also enjoy bouldering because it challenges me and allows me to use problem solving skills when I am not programming.<br />
                                <br />
                                <Row className="rowMargin"> 
                                    <Col>
                                    <Dropdown  drop="right" className="expandM">
                                        <Dropdown.Toggle style={{ width: '7rem' }} variant="info">Skills</Dropdown.Toggle>
                                        <Dropdown.Menu >
                                            <Dropdown.Item>◾ Javascript</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>◾ Jquery</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>◾ Handlebars</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>◾ React</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </Col> 
                                    <Col>
                                    <Dropdown drop="right" className="expandM">
                                        <Dropdown.Toggle style={{ width: '7rem' }} variant="info">Education</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>◾ Columbia State <br /> Assosiates degree</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>◾ Vanderbilt Full-Stack <br /> Bootcamp Certificate</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col>
                                    <Dropdown drop="right" className="expandM">
                                        <Dropdown.Toggle style={{ width: '7rem' }} variant="info">Hobbies</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>◾ Game Development</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>◾ Climbing</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    
                                </Row>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Container>




            </Card>
        </CardGroup>

        </>
    )
}
