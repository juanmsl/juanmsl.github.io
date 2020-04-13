import React from 'react';
import {CircularLoader} from "components";


class ProfessionalCategories extends React.Component {
    renderCategories = (categories) => (
        categories.map((category, i) => {
            const {name, skills, color} = category;
            const value = skills.reduce((prev, skill) => (prev + skill.value), 0) / skills.length;
            return <CircularLoader
                key={i}
                value={value}
                text={name}
                color={color}
                onMouseOver={() => this.props.selectCategory(category)}
            />
        })
    );

    componentDidMount() {
        const {selectCategory, categories} = this.props;
        selectCategory(categories[0]);
    }

    render() {
        const {categories} = this.props;

        return (
            <section className='grid gap-gutter content-h-start'>
                {this.renderCategories(categories)}
            </section>
        );
    }
}

export default ProfessionalCategories;