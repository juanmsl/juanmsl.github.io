import React from 'react';
import data from 'data';
import { Card } from "components";


class PortfolioGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorySelected: "All",
            projects: data.portfolio,
            page: 0,
            items: 5
        };
    }

    renderProjects = (projects) => (
        projects.map((project, i) => (
            <Card
                key={i}
                img={project.image}
                className='portfolio-gallery__item'
                animationClass="animated fadeIn"
            />
        ))
    );

    getCategories = (projects) => {
        const categories = projects.reduce((array, project) => (
            [...array, ...project.categories]
        ), []);
        return ["All", ...new Set(categories)];
    };

    renderCategories = () => {
        const {portfolio} = data;
        const {categorySelected} = this.state;
        const categories = this.getCategories(portfolio);
        return categories.map((category, i) => (
            <h3
                key={i}
                className={`portfolio-gallery__category ${category === categorySelected ? 'active' : ''}`}
                onClick={() => this.setCategory(category)}
            >
                {category}
            </h3>
        ));
    };

    reset = (callback) => {
        this.setState({projects: []});
        setTimeout(callback, 50);
    };

    setCategory = (category) => {
        this.reset(() => {
            const projects = this.filterProjects(category);
            this.setState({
                categorySelected: category,
                projects: projects,
                page: 0
            })
        });
    };

    filterProjects = (categorySelected) => {
        const {portfolio} = data;

        if (categorySelected === "All") return portfolio;
        return portfolio.filter((project) => (
            project.categories.find(category => category === categorySelected)
        ));
    };

    renderPageDots = () => {
        const {projects, page, items} = this.state;
        const total = projects.length;
        const last = (total - items) > page;
        const num_pages = 1 + ((total - items) < 0 ? 0 : total - items);
        const pages = Array.from(Array(num_pages).keys());

        return (
            <section className='portfolio-gallery__dots'>
                <span className={`portfolio-gallery__caret-left ${page === 0 ? 'disabled' : ''}`} onClick={this.prev}/>
                {pages.map((item, i) => (
                    <span
                        key={i}
                        className={`portfolio-gallery__dot ${page === i ? 'selected' : ''}`}
                        onClick={() => this.set(i)}
                    />
                ))}
                <span className={`portfolio-gallery__caret-right ${last ? '' : 'disabled'}`} onClick={this.next}/>
            </section>
        );
    };

    set = (item) => {
        this.setState({
            page: item
        });
    };

    prev = () => {
        this.setState({
            page: this.state.page - 1
        });
    };

    next = () => {
        this.setState({
            page: this.state.page + 1
        });
    };

    getProjects = () => {
        const {projects} = this.state;
        const {page, items} = this.state;
        return projects.slice(page, page + items);
    };

    render() {
        const projects = this.getProjects();

        return (
            <section className='portfolio-gallery'>
                <section className='portfolio-gallery__categories'>
                    {this.renderCategories()}
                </section>
                <section className='portfolio-gallery__items'>
                    {this.renderProjects(projects)}
                </section>
                {this.renderPageDots()}
            </section>
        );
    }
}

export default PortfolioGallery;