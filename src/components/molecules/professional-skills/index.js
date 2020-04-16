import React from 'react';
import { LinealLoader } from "components";


class ProfessionalSkills extends React.Component {
    static defaultProps = {
        skills: []
    };

    renderSkills = (skills) => (
        skills.map((skill, i) => {
            const {name, value} = skill;
            return <LinealLoader
                key={i}
                value={value}
                text={name}
                color={this.props.color}
            />
        })
    );

    render() {
        const {skills} = this.props;

        return (
            <section className='grid row gap-padding'>
                {this.renderSkills(skills)}
            </section>
        );
    }
}

export default ProfessionalSkills;