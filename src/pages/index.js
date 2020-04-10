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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id at egestas eros, dignissim. Aenean egestas quam pellentesque pellentesque tortor malesuada.</p>
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