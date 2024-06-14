import { useEffect, useState } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import profile_pic from "../assets/images/profile_pic.png";

export const Banner = () => {
    const [wordsNumber, setWordsNumber] = useState(0);
    const toRotate = ["Very active", "Watching a movie", "Software Engineer", "Web Developer", "Programmer", "Student", "Handsome", "Studying Dutch", "Sports enjoyer", "Enthusiastic", "Listening to music", "Fan of space"];
    const [text, setText] = useState('Student'); 
    const [toDoWord, setToDoWord] = useState('');
    const [limitCrossed, setLimitCrossed] = useState(false);

    const wordOverheat = 15;


    const generate_trait = () => {
        let i = Math.floor(Math.random() * toRotate.length);
        setToDoWord(oldToDo => oldToDo + ", " + toRotate[i]);
        setWordsNumber(oldWordsNumber => oldWordsNumber + 1);
    }

    useEffect(() => {
        if (wordsNumber > wordOverheat) {
            setLimitCrossed(true);
        }
        const interval = setInterval(write_word, 100);
        return () => clearInterval(interval);

    }, [toDoWord])

    const choose_function = () => {
        if (limitCrossed === false) {
            generate_trait();
        } else {
            setToDoWord('😵‍💫');
            const timeout = setTimeout(function() {setLimitCrossed(false)}, 5000);
            return () => clearTimeout(timeout);
        }
    }

    const write_word = () => {
        if (toDoWord.length > 0) {
            if (text.length > 30) {
                setText(oldtext => oldtext.substring(1, oldtext.length));
            }
            setText(oldtext => oldtext + toDoWord[0]);
            setToDoWord(oldToDo => oldToDo.substring(1, oldToDo.length));
        }
        else {
            setWordsNumber(0);
        }
    }

    const hover_response = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            If you click too many times, I'll get dizzy 😵‍💫
        </Tooltip>
    )

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Mircea Simu`}</h1>
                        <h2>What am I? <ArrowRight/> 
                            <OverlayTrigger placement='right' delay={{show: 1000, hide: 500}} overlay={hover_response}>
                            <Button onClick={choose_function}>Generate</Button>
                            </OverlayTrigger>
                        </h2>
                        <h2>{text}</h2>
                        <p>Hello, my name is Mircea and here are a few things about me:
                            Third year Computer Science and Engineering student at Eindhoven University of Technology. Currently studying and have almost finished all Dutch courses from the university. 
                            I have a good work ethic and time management, having passed all my courses while also working part-time at Picnic for the last 2 years. I am enthusiastic and eager to learn 
                            new things and would love to talk to you about this!</p>
                        {/* <button onClick={() => console.log('connect')}>Let's Connect bro <ArrowRightCircle size={25} /></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profile_pic} width="450" height="450" alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}