import React from 'react';
import { ProfessionalCategories, ProfessionalSkills } from "components";
import data from 'data';


class DynamicCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: {}
        };
    }

    setSelected = (category) => {
        this.setState({
            selectedCategory: category
        })
    };

    render() {
        const {selectedCategory} = this.state;

        return (
            <section>
                <ProfessionalCategories
                    categories={data.professional_skills}
                    selectCategory={this.setSelected}
                />
                <h3>Related Skills to {selectedCategory.name}</h3>
                <ProfessionalSkills
                    color={selectedCategory.color}
                    skills={selectedCategory.skills}
                />
            </section>
        );
    }
}

export default DynamicCategories;