import { Card, Button } from "react-bootstrap";
import imageMap from '../assets/images/ImageMap.png';
import portfolio from "../assets/images/profile_pic_1.png";
import lumosnox from "../assets/images/lumos_nox2.jpg";
import ecoschool from "../assets/images/eco_school.jpg"
import processmining from "../assets/images/process_mining.jpg"

import {useNavigate} from 'react-router-dom';

export const Projects = () => {
    const navigate = useNavigate();

    return ( 
        <div className="projects">
        <div style={{display: 'flex', margin: '0px 100px 0px 100px', flexDirection: 'column', alignItems: 'center'}} id="projects">
            {/* <h1 style={{padding: '0 0 80px 0'}}>Personal Projects</h1> */}
            <div style={{display: 'flex'}}>
                <Card style={{ width: '16rem', padding: '0px'}}>
                <Card.Img variant="top" src={imageMap} style={{ width: 'auto', height: 'auto'}}/>
                <Card.Body>
                    <Card.Title>Image Map</Card.Title>
                    <Card.Text>
                        An Android application that is used to store your favourite memories within images on a map.
                    </Card.Text>
                    <Button onClick={() => navigate('/imageMap')}>View Project</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem', marginLeft: '100px',  padding: '0px' }}    >
                <Card.Img variant="top" src={portfolio} />
                <Card.Body>
                    <Card.Title>Portfolio Website</Card.Title>
                    <Card.Text>
                        This current website that includes everything you need to know about me, including skills and projects.
                    </Card.Text>
                    <Button onClick={() => {navigate("/portfolioWebsite")}}>View Project</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem', marginLeft: '100px',  padding: '0px' }}    >
                <Card.Img variant="top" src={processmining} />
                <Card.Body>
                    <Card.Title>Process Mining</Card.Title>
                    <Card.Text>
                        Data science project involving making, testing and comparing predictors on different datasets.
                    </Card.Text>
                    <Button onClick={() => {navigate("/processMining")}}>View Project</Button>
                </Card.Body>
                </Card>
            </div>
            <div style={{display: 'flex', margin: '80px'}}>
                <Card style={{ width: '16rem', marginLeft: '100px',  padding: '0px' }}    >
                <Card.Img variant="top" src={lumosnox} />
                <Card.Body>
                    <Card.Title>Lumos Nox</Card.Title>
                    <Card.Text>
                        A group project creating a sustainable device for better energy saving.
                    </Card.Text>
                    <Button onClick={() => {navigate("/lumosNox")}}>View Project</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem', marginLeft: '100px',  padding: '0px' }}    >
                <Card.Img variant="top" src={ecoschool} style={{width: 'auto'}}/>
                <Card.Body>
                    <Card.Title>Eco-School</Card.Title>
                    <Card.Text>
                        A group project for creating a schematic of a school of the future and presenting it.
                    </Card.Text>
                    <Button onClick={() => {navigate("/ecoSchool")}}>View Project</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'end', marginRight: '15px'}}>
            <h4>Image by <a href="https://www.freepik.com/free-vector/watercolor-galaxy-background_23682335.htm#query=pink%20space&position=0&from_view=keyword&track=ais&uuid=49cceef5-d9bd-4363-9ecb-702f18ad8526">Freepik</a></h4>
        </div>
        </div>
    );
}