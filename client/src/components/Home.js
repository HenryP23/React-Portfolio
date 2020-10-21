import React from 'react'
import {Row, Col, Image, Button, Card, CardGroup, Container } from 'react-bootstrap';
import '../App.css';
import profilePic from '../images/0.jpg';
export default function home() {
    return (

        <CardGroup>
            <Card className="homeCard">
                <Container >
                    <Card bg="light" text="light" border="dark" className="text-center mt-5 ml-5 mr-5" >

                        <Card.Body className="color">
                            <Image src={profilePic} roundedCircle />
                            <Card.Title className="mt-2">About Me</Card.Title>
                            <Card.Text>
                                My name is Henry Parrish. I am a graduate of columbia state community college, with an assosiate degree in computer science. I have also love programming ever since I high, where I was able to take 2 years of it. In my spare time I like to develop game on unity. I also enjoy bouldering because it challenges me and allows me to use problem solving skills when I am not programming.<br />
                                <br />
                                <Row className="rowMargin">
                                    <Col>
                                        <ul className="text-left">
                                            <p>Skills</p>
                                            <li>Javascript</li>
                                            <li>Jquery</li>
                                            <li>Handlebars</li>
                                            <li>React</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className="text-left align-self-end">
                                            <p>Education</p>
                                            <li>Columbia State Assosiates degree</li>
                                            <li>Vanderbilt Full-Stack Bootcamp</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className="text-left align-self-end">
                                            <p>Hobbies</p>
                                            <li>Game Development</li>
                                            <li>Climbing</li>
                                            
                                        </ul>
                                    </Col>
                                    
                                </Row>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Container>




            </Card>
        </CardGroup>

    )
}
