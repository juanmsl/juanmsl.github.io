import React from 'react';
import Progress from 'react-progressbar';
import {easeQuadInOut} from 'd3-ease';
import VisibilitySensor from "react-visibility-sensor";
import {AnimatedProgressProvider} from "components";


const LinealLoader = ({value, text, color}) => (
    <VisibilitySensor>
        {({isVisible}) => (
            <AnimatedProgressProvider
                valueEnd={isVisible ? value : 0}
                duration={200}
                easingFunction={easeQuadInOut}
            >
                {value => (
                    <section className={`grid row lineal-loader ${color}`} >
                        <section className='lineal-loader__text'>
                            <h5>{text}</h5>
                            <h5>{Math.round(value)}%</h5>
                        </section>
                        <Progress completed={value} height={5} color='' />
                    </section>
                )}
            </AnimatedProgressProvider>
        )}
    </VisibilitySensor>
);

LinealLoader.defaultProps = {
    color: ''
};

export default LinealLoader;