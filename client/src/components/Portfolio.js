import React from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import burger from '../images/BurgerAppPic.png';
import codeQuiz from '../images/CodeQuizSS2.png'
import noteTaker from '../images/noteTaker.png';
import p2Img from '../images/Project2Img.png';
import workDay from '../images/WorkDayImg.png';
import p1Img from '../images/Time-Well-Wasted.gif';
import '../App.css';

export default function portfolio() {
    return (
        <>
            <Container>
                <CardGroup>
                    <Card bg="dark" text="light" border="dark" className="text-center mt-5 border" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title><h1>Project Collection</h1></Card.Title>
                            <Card.Text>
                            <h5>This is a collection of a few of my favorite projects I have worked on, in a group and by myself</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                </Container>
            <Container>
                <CardGroup>

                    <Card bg="dark" text="light" border="dark" className="text-center mt-5 border mr-5" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={p2Img} height="350"/>
                        <Card.Body>
                            <Card.Title>Question Forum</Card.Title>
                            <Card.Text>
                            A community application where you can ask question on HTML, CSS, or JavaScript, you can also look though previously asked questions. If you do not find a question similar to yours, you can ask a new question.
                            </Card.Text>
                            <Button className="buttonM" variant="info" onClick={(e) => { window.location.href = 'https://github.com/Brendon-Ravn/CodeQ_14'; }} >Github Link</Button>
                        </Card.Body>
                    </Card>
            
                    <Card bg="dark" text="light" border="dark" className="text-center mt-5" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={p1Img} height="350" />
                        <Card.Body >
                            <Card.Title>Music and Movie Search</Card.Title>
                            <Card.Text>
                            This search application utilizes two server-side
                            APIs and a CSS framework. The application allows you to search for movies or music.<br/>
                            <br/>
                            <br/>
                            </Card.Text>
                            <Button className="buttonM" variant="info" onClick={(e) => { window.location.href = 'http://github.com/kelalArrzenai/Time-Well-Wasted'; }} >Github Link</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

            <Container>
                <CardGroup>

                    <Card bg="dark" text="light" border="dark" className="text-center mt-5 mr-5" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={burger} height="350" />
                        <Card.Body>
                            <Card.Title>Burger Bucket List</Card.Title>
                            <Card.Text>
                            This burger application is meant to keep track of all the different burgers you have tried.
                            Its kind of like a bucket list for burgers.
                            </Card.Text>
                            <Button className="buttonM" variant="info" onClick={(e) => { window.location.href = 'https://github.com/HenryP23/Burger-App'; }} >Github Link</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="dark" text="light" border="dark" className="text-center mt-5 " style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={codeQuiz} height="350"/>
                        <Card.Body >
                            <Card.Title>Code Quiz</Card.Title>
                            <Card.Text>
                                A timed quiz application with leaderboards.<br/>
                                <br/>
                            </Card.Text>
                            <Button className="buttonM" variant="info" onClick={(e) => { window.location.href = 'https://github.com/HenryP23/CodeQuiz'; }} >Github Link</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

            <Container>
                <CardGroup>

                    <Card bg="dark" text="light" border="dark" className="text-center mt-5 mr-5" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={workDay} height="350" />
                        <Card.Body>
                            <Card.Title>Work Day Scheduler</Card.Title>
                            <Card.Text>
                            An 8-5 scheduler with present and past colored time blocks, and options to save data.
                            </Card.Text>
                            <Button className="buttonM" variant="info" onClick={(e) => { window.location.href = 'https://github.com/HenryP23/WorkDayScheduler'; }} >Github Link</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="dark" text="light" border="dark" className="text-center mt-5" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={noteTaker} height="350"/>
                        <Card.Body >
                            <Card.Title>Note Taker</Card.Title>
                            <Card.Text>
                                An application that allows you to create, save, and edit notes  <br/>
                                <br/>
                            </Card.Text>
                            <Button className="buttonM" variant="info" onClick={(e) => { window.location.href = 'https://github.com/HenryP23/NoteTaker'; }} >Github Link</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
