import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export const Skills = () => {
    return (
        <section>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Container className="skills">
                <Row>
                    <Col style={center_column}>
                        <h1>Programming</h1>
                        <div style={{'display': 'flex', 'justify-align': 'center', 'align-items': 'center'}}>
                            <h5 style={{float: 'left'}}>Java</h5> 
                            <ProgressBar now={80} style={{width: 350, float: 'right', 'margin-left': '18px'}}/>
                        </div>
                        <div style={{'display': 'flex', 'justify-align': 'center', 'align-items': 'center'}}>
                            <h5 style={{float: 'left'}}>Python</h5> 
                            <ProgressBar now={60} style={{width: 350, float: 'right', 'margin-left': '18px'}}/>
                        </div>
                        <div style={{'display': 'flex', 'justify-align': 'center', 'align-items': 'center'}}>
                            <h5 style={{float: 'left'}}>C++</h5> 
                            <ProgressBar now={70} style={{width: 350, float: 'right', 'margin-left': '18px'}}/>
                        </div>
                        <div style={{'display': 'flex', 'justify-align': 'center', 'align-items': 'center'}}>
                            <h5 style={{float: 'left'}}>Javascript</h5> 
                            <ProgressBar now={50} style={{width: 350, float: 'right', 'margin-left': '18px'}}/>
                        </div>
                    </Col>
                    <Col>
                        <h1>Projects 2 / 2</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Projects 1 / 3</h1>
                    </Col>
                    <Col>
                        <h1>Projects 2 / 3</h1>
                    </Col>
                    <Col>
                        <h1>Projects 3 / 3</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

const center_column = {
    'flex-direction': 'column',
    'display': 'flex', 
    'align-items': 'center'
}