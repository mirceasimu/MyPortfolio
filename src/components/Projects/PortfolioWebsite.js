import '../../App.css';
import { useEffect } from 'react';

import ss1 from '../../assets/images/Projects/portfolioWebsite/navbar.jpg';
import ss2 from '../../assets/images/Projects/portfolioWebsite/banner.jpg';
import ss3 from '../../assets/images/Projects/portfolioWebsite/skills.jpg';
import ss4 from '../../assets/images/Projects/portfolioWebsite/projects.jpg';

export const PortfolioWebsite = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <h1 >nu stiu de ce primul element e lipit de navbar, orice style ii dau</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
                <h1>Portfolio Website</h1>
                <div style={{content: 'auto', margin: '100px'}}>
                    <h3>Background and Goal</h3>
                    <p>This is a project that I started working on to better showcase everything there is to know professionally about me.
                        This was the main reason for creating the website, but I also wanted to learn more about Frontend, React and how to
                        create a website from scratch, since all I did previously was the application "Image Map". Since this is my first
                        website and my second time working with Frontend, I have learned a lot of new things and I am very proud of what I
                        have managed to accomplish in just under 3 months (October - December 2023).
                    </p>
                    <p>
                        The goal of the portfolio website is for employers and other people that are interested in my work to be able to see
                        everything there is to know about me professionally in an easy manner, including my skills, my projects and my contact. 
                        Also to try out different possibilities of React libraries.
                    </p>
                    <h4>Technology used: React js</h4>
                </div>
                <div style={{ margin: '0 100px 100px 100px'}}>
                    <h3>The Final Product</h3>

                    <h4>The Navigation Bar</h4>
                    <p>
                        Here are some screenshots and explanations of the final product. We will start with the navigation bar, which is the 
                        first thing you see when you enter the website. It contains a logo, a few links to different sections of the homepage 
                        and a few links to my social media accounts, them being Linkedin and Github. The navigation bar is what is seen across 
                        any part of the website, so it is always easy to surf the website and go back to the home page at any point.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={ss1} alt='navbar' style={{width: '950px'}} />
                    </div>
                    <h4>Banner</h4>
                    <p>
                        The first section is the banner on the home page, which
                        is the first thing you see when you enter the website. It contains a picture of me, my name, a paragraph about me and
                        a button that adds a little bit of interactivity to the website. If you press the button, it will add a new title or just 
                        general characteristic about me in a "typing" manner, always keeping the list of these characteristics on one line. 
                        Pressing it multiple times will add as many characteristics as the button is pressed, but (as you can also see if you 
                        hover the mouse over the button for a few seconds) if you press it too many times, it will stop adding new characteristics 
                        and instead showing dizzy emojis, since this is what I felt a great representation of overdoing it and a fun easteregg.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={ss2} alt='banner' style={{width: '950px', height:'400px'}}/>
                    </div>
                    <h4>Skills</h4>
                    <p>
                        The next section is the skills section, which shows a personal measurement of my skills that I have aquired 
                        through different projects and experiences or studying up until now. I have categorized them into 5 categories. 
                        The first two at the top are more general ones, while the bottom three are more domain specific. The first two are 
                        "Programming", representing my experience with different programming languages and "Teamwork", representing my 
                        experience and contribution in different teamwork environments. The bottom three are "Data Science", representing 
                        my experience with data science, machine learning and artificial intelligence, "Front End", representing my 
                        experience with frontend technologies, including both websites and mobile applications and "Other", representing 
                        other skills that I have aquired, but do not fit in the other categories.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={ss3} alt='skills' style={{width: '950px', height:'400px'}}/>
                    </div>
                    <h4>Projects</h4>
                    <p>
                        The next section is the projects section, which shows a list of all the projects that I have worked on up until now. 
                        Each project has a picture, a title, a description and a button that leads to the project's page. The project's page 
                        contains more information about the project, including the background information of why I have worked on it, the 
                        goal of the project, the technology used and a few screenshots of the current representation. 
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={ss4} alt='projects' style={{width: '950px', height:'400px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}