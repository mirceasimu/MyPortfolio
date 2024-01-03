import '../../App.css';

import ss1 from '../../assets/images/Projects/lumosNox/1.jpg';
import ss2 from '../../assets/images/Projects/lumosNox/2.jpg';
import ss3 from '../../assets/images/Projects/lumosNox/3.jpg';
import ss4 from '../../assets/images/Projects/lumosNox/4.jpg';
import ss5 from '../../assets/images/Projects/lumosNox/5.jpg';
import design from '../../assets/images/Projects/lumosNox/design.jpg';

export const LumosNox = () => {
    return (
        <div>
            <h1 >nu stiu de ce primul element e lipit de navbar, orice style ii dau</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
                <h1>Lumos Nox</h1>
                <div style={{content: 'auto', margin: '100px'}}>
                    <h3>Background and Goal</h3>
                    <p>This is a group project of 5 people from all kinds of bachelors (my team had 2xComputer Science, 1xPsychology, 1xArchitecture, 1xBiomedical Engineering) 
                         that I worked on for a Design Based Learning course at the Technical University of Eindhoven 
                        in my second year of the Bachelor's degree (September - November of 2022). Since it is a DBL project, we are provided with 
                        the general scheme of what we are supposed to do, and we have to come up with the rest of the details and procedures 
                        ourselves.
                    </p>
                    <p>
                        The goal of the project was to create a sustainable device from scratch through a complete design process, from the first idea to 
                        the realization of a prototype. This is regarded as a core competence to any engineer. We would learn how to set up a design goal, 
                        define specifications, handle constraints, manage time and also present our results to juries, with the stress of doing this being 
                        part of the authentic engineering experience.
                    </p>
                    <h4>Technology used: Arduino, C++</h4>
                </div>
                <div style={{ margin: '0 100px 100px 100px'}}>
                    <h3>The Final Product</h3>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={design} alt="both" style={{height: '70px', margin:'50px', }} />
                    </div>
                    

                    <h4>The Group Work</h4>
                    <p>
                        For every meeting we had, one of us was the chairman of that meeting, one of us was the minutes taker, writing everything 
                        down that was said so we know for future reference, and we would rotate these roles every meeting. This was the main 
                        responsibility all of us had to do to not waste time during meetings and to keep track of the progress.
                    </p>
                    <h4>The Workload</h4>
                    <p>
                        For the workload, I personally assigned myself the role of making the actual device, because I wanted to take on the 
                        challenge and learn more about creating a physical device, since I havent done this before. I put many many hours into 
                        this project, since I had to teach myself from the internet everything. I learned through this project how to use an 
                        Arduino Nano, how to use a breadboard, different uses of components like many wires, an LED matrix, a button, 
                        a light sensor, the importance of choosing the right resistors and how to use them if needed. Along with everything 
                        hardware related learned, I have also learned the frustration of having to debug a physical device. Of now knowing 
                        where the problem is, if it is in the code, in the wiring, in the components, in the breadboard, in the Arduino, 
                        or if it is just a small mistake that I have made. This was a very valuable experience for me, since I have never 
                        done anything like this before and I am very happy with how much I know now compared to before.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={ss3} alt="both" style={{height: '400px', margin:'50px', }} />
                    </div>
                    <h4>The Prototype</h4>
                    <h5>The Switch</h5>
                    <p>
                        The final prototype is made out of two devices, the Sensor and the Switch. The Switch is the device that you 
                        stick to the light switch in your room, covering the switch. It has an arm inside that is connected to a servo 
                        motor, and that will push the light switch to turn the light on or off. The arm can be accessed manually by 
                        a button, such that even if the device itself is covering the light switch, you can still turn the light on 
                        or off by pressing this button. 
                    </p>
                    <h6>Components: Arduino Nano, Servo Motor, nRF24L01+ module (wireless connection with the Sensor), Button</h6>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '50px'}}>
                    <img src={ss1} alt="both" style={{height: '250px'}} />
                    <img src={ss2} alt="both" style={{height: '250px'}} />
                    </div>

                    <h5>The Sensor</h5>
                    <p>
                        The Sensor is the device that works on batteries and you can take with you and place it wherever you want. This 
                        can be on a table, on a shelf, on the floor, wherever you want. It has a light sensor that outputs a value of 
                        how much light there is in the room. If the value is above a certain threshold manually set after testing to be 
                        optimal lighting, then the Sensor notifies the user that there probably is a waste of light turned on in the room. How does 
                        the Sensor notify the user? It has an LED matrix that displays a sad face if there is too much light in the room, 
                        and therefore a waste of energy. Once the user notices this, they can press a button on the Sensor, and this will 
                        send a signal to the Switch to turn the light off. The second button resets the device in case something does not work.
                    </p>
                    <h6>Components: Arduino Nano, LED matrix, nRF24L01+ module (wireless connection with the Sensor), Buttons, Light Sensor</h6>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '50px'}}>
                    <img src={ss5} alt="both" style={{height: '250px'}} />
                    <img src={ss4} alt="both" style={{height: '250px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}