import { Container, Row, Col, ProgressBar} from "react-bootstrap";

export const Skills = () => {

    const topBarWidth = 325;
    const botBarWidth = 140;

    return (
        <section>
            <Container className="skills" id="skills">
            <div>
                <Row>
                    <Col style={center_column}>
                        <h1>Programming</h1>
                        <TopColumn data={programmingData} barWidth={topBarWidth} />
                    </Col>
                    <Col style={center_column} className="pe-5">
                        <h1>Teamwork</h1>
                        <TopColumn data={teamworkData} barWidth={topBarWidth} />
                    </Col>
                </Row>
                <Row style={{margin: '60px 0 0 0'}}>
                    <Col xs={4} style={center_column}>
                        <h3>Data Science</h3>
                        <TopColumn data={dataScienceData} barWidth={botBarWidth} />
                    </Col>
                    <Col xs={4} style={center_column}>
                        <h3>Front End</h3>
                        <TopColumn data={frontEndData} barWidth={botBarWidth} />
                    </Col>
                    <Col xs={4} style={center_column} className="pe-4">
                        <h3>Others</h3>
                        <TopColumn data={othersData} barWidth={botBarWidth} />
                    </Col>
                </Row>
            </div>
            </Container>
        </section>
    );
}


const TopColumn = ({ data, barWidth }) => {
    return (
        <div style={{ display: 'flex'}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', marginLeft: '20px', height: '120px' }}>
           {data.map((item) => (
            <div style={{ display: 'flex', alignItems: 'center', margin: '6px 0 0 0'}} key={item.label}>
                <h5 style={{ margin: '0 10px 0 auto'}}>{item.label}</h5>
                <ProgressBar now={item.value} style={{ height: 12, width: barWidth, marginLeft: 'auto' }} />
            </div>
            ))}
        </div>
      </div>
    )
}

const programmingData = [
    { label: 'Java', value: 80 },
    { label: 'Python', value: 60 },
    { label: 'C++', value: 70 },
    { label: 'Javascript', value: 50 },
    { label: 'SQL', value: 40 },
  ];

const teamworkData = [
    { label: 'Communication', value: 90 },
    { label: 'Leadership', value: 60 },
    { label: 'Critical Thinking', value: 80 },
    { label: 'Team Building', value: 70},
    { label: 'Interpersonal skills', value: 55}
  ];

  const dataScienceData = [
    { label: 'Research Skills', value: 80 },
    { label: 'Machine Learning', value: 65 },
    { label: 'Data Presentation', value: 55 },
    { label: 'Data Visualization', value: 50}
  ];

  const frontEndData = [
    { label: 'React', value: 75 },
    { label: 'CSS', value: 40 },
    { label: 'Creative Thinking', value: '60'},
    { label: 'App Design', value: '50'}
  ]

  const othersData = [
    { label: 'Video Editing', value: 70 },
    { label: 'Scrum', value: 80 },
    { label: 'Problem Solving', value: 85 },
    { label: 'Git', value: 65 },
  ];

const center_column = {
    'flex-direction': 'column',
    'display': 'flex', 
    'align-items': 'center',
    'justify-content': 'start',
    height: '175px'
}