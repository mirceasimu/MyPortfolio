import '../../App.css';
import { useEffect } from 'react';

import MovieClip from '../MovieClip';

export const EcoSchool = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <h1 >this needs to be here</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
                <h1>Eco-School</h1>
                <div style={{content: 'auto', margin: '100px'}}>
                    <h3>Background and Goal</h3>
                    <p>
                        This is a group competition won by me and 2 other colleagues in highschool. It is for a competition run by the 
                        EOS Foundation in collaboration with Microsoft Romania in 2019. The competition was categorized in different sections 
                        based on the grade the students were in. Translating this would give categories: age ~11-12, age ~13-14, age ~15-16, age 
                        ~17-18. We were in the highest category of age ~17-18. The competition was to create an ecological school and the top three 
                        competitors from each category would be invited to Bucharest to present their project to important people from the EOS 
                        Foundation and Microsoft Romania and organizers of the competition. The final top three ranking was decided before the 
                        presentations, but the presentations were still important to see how the students would present their project and how 
                        they would answer questions from the people. We were ranked 1st place in our category and we were awarded a monitor, 
                        which I still use to this day.
                    </p>
                    <p>
                        The goal of the project was to create a sustainable and eco-friendly school of the future in Minecraft: Education Edition. 
                        We had to think of everything, from the building itself, to the furniture, to the technology used, to the food, to the 
                        activities, to the teachers, to the students, to the school's impact on the environment, to the school's impact on the 
                        community, everything. It was also granted extra points if we could use a built-in code structure from 
                        Minecraft: Education Edition. We had to finally submit the map of the school and a video presenting every idea of this 
                        eco-school using the map we have created. The video was to be short, and also in Romanian, since the competition was 
                        only for Romanian students.
                    </p>
                    <h4>Technology used: Minecraft: Education Edition, Video-Editing and Recording</h4>
                </div>
                <div style={{ margin: '0 100px 100px 100px'}}>
                    <h3>The Final Product</h3>
                    
                    <h4>The Video</h4>
                    <p>
                        The video is in Romanian, but everything is explained below. Enjoy!
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '40px'}}>
                    <MovieClip/>
                    </div>

                    <h4>The School Features</h4>
                    <p>
                        The video we have created is in Romanian, but I will explain everything we have done in the video for the school here, 
                        in the order that is showed in the video. You can follow the video while also reading this text at the same time to 
                        see in real time the features that are showed in that video, in case you do not speak Romanian. The video is presented 
                        by the 'director' of the school, which is one of my colleagues.
                    </p>
                    <p>
                        From the beginning: "We have everywhere on campus different 
                        bins to recycle all types of waste. Our campus is as green as possible, with a small park at the entrance of the eco-school, 
                        and a water fountain. Our school entrance goes into the library to encourage students to read as much as possible. We have a 
                        small lecture room in the middle of the library where professors can sometimes have activities. On one side of the building, 
                        there is the girl dormitory with bathrooms and toilets, while on the other side there is the boys one. The rest of the hallways 
                        are filled with classrooms and laboratories, for example for Computer Science and for Chemistry. It is important to mention that 
                        each classroom also has different bins for recycling. If we go to the second floor, there is a room designed to hold events, 
                        from presentations to parties or important school announcements. Right above the library, in the middle of the second floor, 
                        there is a cafeteria where students can eat and drink from the school canteen. The students eat below, while the teachers 
                        eat on a flight of stairs above them. We have the kitchen and the teachers' lounge on one side and the other of the cafeteria."
                    </p>
                    <p> 
                        School backyard: "We go outside the building into the back of the school. We show a lot of solar panels, from where most of the energy for the 
                        eco-schoold comes from. These panels can move according to the placement of the sun for better efficiency. We have a small 
                        glasshouse for growing our own plants and vegetables. We have used a small river that flows nearby our school to build a 
                        small lake, that also has a specially designed place for swimming, but also just for relaxing, with a small beach. Another 
                        very important thing in our lake is our algae farm, which we use to produce biofuel. The algae is automatically collected 
                        in our farm and taken to a storage room, where it is processed into biofuel. Only authorized people can enter this room, 
                        using an access card. Here we can see the algae coming from the farm unprocessed, we take it, process it and send it into 
                        the school system to power the algae farm, but also other things in the school. "
                    </p>
                    <p>
                        Flying view of the school: our school also has a set of solar panels across its roof, which is strictly used for lighting 
                        in the school. It is mostly used for the ground floor, since the second floor has a glass ceiling, which lets in a lot of 
                        natural light. We have one one side and the other of the school different sports fields to promote physical activity. Also, 
                        you can see that the school is surrounded by a lot of trees, because the school has a program promoting planting trees by the 
                        students."
                    </p>
                    <p>
                        Front of the school and end of video: "Here we have a map of the school, and we can see that the lights in the park are also powered by solar 
                        panels that store the energy during the day and use it during the night. Finally, we will demonstrate how we have used the 
                        built-in coding system in the game to make the building of our eco-school easier. Thank you for watching!"
                    </p>
                </div>
            </div>
        </div>
    );
}