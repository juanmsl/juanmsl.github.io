import React from 'react';
import data from 'data';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderClasses } from "shared/common";


const Timeline = () => {

    const [selected, setSelected] = React.useState(1);

    const formatDate = (date) => {
        const momentDate = moment(date);
        return momentDate.isValid() ? momentDate.format('MMM YYYY') : date
    };

    const timeBetween = (date_start, date_end) => {
        const momentStart = moment(date_start);
        const momentEnd = moment(date_end);

        if (momentEnd.isValid()) {
            return momentEnd.from(momentStart, true);
        }

        return momentStart.fromNow();
    };

    const Company = ({
        name, date_start, date_end, id
    }) => {

        return (
            <article
                className={renderClasses({
                    timeline__company: true,
                    selected: id === selected
                })}
                onClick={() => { setSelected(id); }}
            >
                <h4>{name}</h4>
                <h5>{formatDate(date_start)} - {formatDate(date_end)} ({timeBetween(date_start, date_end)})</h5>
            </article>
        );
    };

    const renderCompanies = (companies) => (
        companies.map((company, i) => (
            <Company
                key={i}
                id={i}
                {...company}
            />
        ))
    );

    const renderSelectedCompany = ({
        name, date_start, date_end, description, position, links, technologies
    }) => (
        <section className='timeline__details'>
            <section className='timeline__details__name'>
                <h4>{name}</h4>
                <span className='timeline__details__links'>
                    {links.map(({icon, url}, key) => (
                        <a
                            key={key}
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='timeline__details__link'
                        >
                            <FontAwesomeIcon icon={icon} key={key} />
                        </a>
                    ))}
                </span>
            </section>
            <h3 className='timeline__details__position'>{position}</h3>
            <h5>{formatDate(date_start)} - {formatDate(date_end)} ({timeBetween(date_start, date_end)})</h5>
            <ul>
                {description.map((text, key) => (
                    <li key={key}>{text}</li>
                ))}
            </ul>
            <section className='timeline__details__skills'>
                {technologies.map((technology, key) => (
                    <span className='timeline__details__skill' key={key}>{technology}</span>
                ))}
            </section>
        </section>
    );
    
    const { experience } = data;

    return (
        <section className={`timeline item-${selected}`}>
            <section className='timeline__companies'>
                {renderCompanies(experience)}
            </section>
            {renderSelectedCompany(experience[selected])}
        </section>
    );
};

export default Timeline;