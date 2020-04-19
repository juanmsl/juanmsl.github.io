import React from 'react';
import data from 'data';
import { TimePoint } from "components/molecules";


class Timeline extends React.Component {
    renderTimePoints = (timePoints) => (
        timePoints.map((timePoint, i) => (
            <TimePoint
                key={i}
                date={timePoint.date}
                name={timePoint.name}
                place={timePoint.place}
                description={timePoint.description}
            />
        ))
    );

    render() {
        const { experience } = data;

        return (
            <section className='timeline'>
                {this.renderTimePoints(experience)}
            </section>
        );
    }
}

export default Timeline;