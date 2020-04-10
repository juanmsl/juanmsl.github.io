import React from 'react';
import {Image, Navbar, Section, Footer, Title} from "shared/components";


class App extends React.Component {
    render() {
        return (
            <main>
                <Section main navbar>
                    <Navbar/>
                    <section>
                        <h4>Wellcome, I’m</h4>
                        <h1>Juan Manuel Sánchez</h1>
                        <h3>Fullstack developer</h3>
                        <p>I’m a web developer who is passionate about what I do, programming and design, both of them are my hobbies and my livelihood, making things functional and visually attractive are some of my priorities.</p>
                    </section>
                    <Image src='photo.svg'/>
                </Section>
                <Section>
                    <Image src='proffesional_skills.svg' />
                    <section>
                        <Title>Proffesional Skills</Title>
                        <p>I love what I do, and I’m constantly improving my knowledge and skills to be better each day.</p>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Title>My Experience</Title>
                    </section>
                    <Image src='my_experience.svg' />
                </Section>
                <Section blue_full>
                    <Image src='services.svg' />
                    <section>
                        <Title>What I can do for you</Title>
                    </section>
                </Section>
                <Section full>
                    <Title>My Portfolio</Title>
                </Section>
                <Footer />
            </main>
        );
    }
}

export default App;