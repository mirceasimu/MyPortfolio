import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap';

import ss1 from '../../assets/images/Projects/imageMap/1.jpg';
import ss2 from '../../assets/images/Projects/imageMap/2.jpg';
import ss3 from '../../assets/images/Projects/imageMap/3.jpg';
import ss4 from '../../assets/images/Projects/imageMap/4.jpg';
import ss5 from '../../assets/images/Projects/imageMap/5.jpg';

export const ImageMap = () => {
    return (
        <div>
            <h1 >nu stiu de ce primul element e lipit de navbar cu orice style ii dau</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
                <h1>Image Map</h1>
                <div style={{content: 'auto', margin: '100px'}}>
                    <h3>Background and Goal</h3>
                    <p>This is a project that I started working on as a gift. It is to me a very important way of showing that if I 
                        put my mind to something, I can do it. It was not an easy task, since it was my first time working with 
                        both Frontend in general and making an Android application. I had to do a lot of research, learn a lot
                        of new things and have a working prototype in just 3-4 months of my own deadline(May - August 2023). 
                        I am very proud of the fact that I met my deadline and what I have managed to accomplish.
                    </p>
                    <p>
                        The goal of the project is to have an easy way of accessing your favourite memories, organized based on location.
                        It is a way to store your photos in a more meaningful way, since you can see them on a map and remember the
                        exact place you took them. It is also a way to not store them locally on your device, so it does not take up
                        a lot of space, but rather just using an internet connection to access their online Firebase storage database.
                        It is still a prototype and a work-in-progress and I still want to add a lot of new features to it, so look out
                        for updates!
                    </p>
                    <h4>Technology used: React native, Firebase, Google Maps API, Expo GO</h4>
                </div>
                <div style={{ margin: '0 100px 100px 100px'}}>
                    <h3>The Current Prototype</h3>
                    <p>
                        Here are some screeshots of the current prototype. Starting from the first to the last, you can see the
                        logo of the application that I have designed and made myself, the map with markers on different locations
                        in Europe, like Hague, Eindhoven in the Netherlands, the island Mallorca in Spain, Rome in Italy and a few
                        other cities in Romania. If a marker is pressed, it will show its name(which is usually just the name of
                        the location), for example Rome("Roma" in Romanian). If the name of the location is pressed, it will show
                        the photos that are stored in the Firebase storage database for that location, so the photo memories made
                        in that location. If a photo is pressed, it will show the photo in a bigger size covering the entire screen.
                    </p>
                    <Container>
                        <Row>
                            <Col>
                                <img src={ss1} alt='loading' style={{width: '200px', height:'400px'}}/>
                            </Col>
                            <Col>
                                <img src={ss2} alt='map' style={{width: '200px', height:'400px'}}/>
                            </Col>
                            <Col>
                                <img src={ss3} alt='locationName' style={{width: '200px', height:'400px'}}/>
                            </Col>
                            <Col>
                                <img src={ss4} alt='album' style={{width: '200px', height:'400px'}}/>
                            </Col>
                            <Col>
                                <img src={ss5} alt='enlarge' style={{width: '200px', height:'400px'}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}