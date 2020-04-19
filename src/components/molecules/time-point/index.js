import React from 'react';


const TimePoint = ({date, name, place, description}) => (
    <section className='time-point'>
        <span className='time-point__circle' />
        <section>
            <h5 className='time-point__date'>{date}</h5>
            <h4 className='time-point__name'>{name}</h4>
            <h5 className='time-point__place'>{place}</h5>
            {description.map((paragraph, i) => (
                <p key={i} className='time-point__description'>{paragraph}</p>
            ))}
        </section>
    </section>
);

export default TimePoint;