import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import logo from "../assets/images/logo.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        navigate("/");
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home" onClick={() => onUpdateActiveLink('home')}>
                <img src={logo} width="95" height="60" alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://github.com/mirceasimu" target="_blank" rel="noreferrer"><img src={github} alt="GithubLink" /></a>
                    <a href="https://www.linkedin.com/in/mircea-simu-97b21b296/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                </div>
                {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
                </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
