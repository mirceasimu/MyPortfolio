import '../../App.css';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ss1 from '../../assets/images/Projects/processMining/groupWork.jpeg';
import ss2 from '../../assets/images/Projects/processMining/poster.jpeg';

export const Moonshot = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <h1 >this needs to be here</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
                <h1>Moonshot</h1>
                <div style={{content: 'auto', margin: '100px'}}>
                    <h3>Background and Goal</h3>
                    <p>
                        This is my Software Engineering (end) Project (SEP) that I worked on in my third year of the Bachelor's degree (September 2023 - July 2024). 
                        The project was done in a group of 9 people and it was a project in collaboration with a professor here at the Eindhoven University of Technology. 
                        The professor was our client and he provided us with the general idea of what he wanted us to do, and we had to come up with the rest of the details
                        and procedures ourselves. For this, we would have regular client meetings with him to discuss the progress and the next steps.
                        As a bit of context, Galaxy (galaxyproject) is a platform that allows users to run data analysis tools in a user-friendly way that is not only for 
                        people with informatics expertise.
                        
                    </p>
                    <p>
                        The goal was to create a tool-package for Galaxy that would transform inputted software projects repositories from GitHub into a visual format similar to 
                        UML diagrams, to help software engineers and researchers understand and analyze these software projects and code in a more efficient way.
                    </p>
                    <h4>Technology used: Python, Scrum, Javascript, ANTLR, SparQL, SEON</h4>
                </div>
                <div style={{ margin: '0 100px 100px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h3 style={{marginBottom: '50px'}}>The Project Characteristics</h3>

                    <div>
                    <h4>The Group Work</h4>
                    <Container>
                        <Row style={{display: 'flex', alignItems: 'center'}}>
                            <Col>
                                <p>
                                    We were a group of 5 people and we worked on an advanced scrum approach. Two members of the group have taken a few 
                                    lectures regarding scrum organization and one of them was the scrum master, while the other one was a backup scrum master. 
                                    Since this was a scrum approach, we would talk in each meeting about what we have done since the last 
                                    meeting, what we are planning to do until the next meeting and if we have any problems or questions. This was a mandatory 
                                    part of the project, since we had to keep track of our progress and to make sure that everyone is on the same page.
                                </p>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center'}}>
                                <img src={ss1} alt="group" style={{height: '200px', width: '300px' }} />
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    <div>
                    <h4>The Workload</h4>
                    <p>
                        The workload was split evenly between the 5 of us. If anyone had a more difficult task, the others would help him out 
                        after they were done with their task. We worked on two different datasets and we used as prediction models: a naive 
                        estimator, linear regression (which was for the most part my task), decision trees, random forest, support vector machine (SVM), 
                        and then we worked on improving them in the coming weeks by using different techniques like feature selection and feature 
                        engineering, choosing only relevant features and also adding new ones based on existing ones. We would also work on improving 
                        the efficiency of the models so that they run in faster time.
                    </p>
                    </div>
                    <div>
                    <h4>Reviewing and Comparing</h4>
                    <Container>
                        <Row style={{display: 'flex', alignItems: 'center'}}>
                            <Col>
                                <p>
                                    Another very important part of the project was to compare the models and to see which one is the best in which conditions. 
                                    We would also have to present at 3 times during the project our progress to our tutor and to people that work in the field. 
                                    This was achieved by visualizing the results of the models and by comparing them on different metrics like accuracy and 
                                    mean absolute error, or any other metrics we wanted to use to best represent the results. We would have to put all of the 
                                    progress on a poster and present it, something that everyone was involved in.
                                </p>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center'}}>
                                <img src={ss2} alt="group" style={{height: '200px', width: '300px' }} />
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}