import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {easeQuadInOut} from 'd3-ease';
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';
import {AnimatedProgressProvider} from "components";


const CircularLoader = ({value, text, color, ...props}) => (
    <VisibilitySensor>
        {({isVisible}) => (
            <AnimatedProgressProvider
                valueEnd={isVisible ? value : 0}
                duration={200}
                easingFunction={easeQuadInOut}
            >
                {value => (
                    <section className={`grid row circular-loader ${color}`} {...props} >
                        <section className='circular-loader__container'>
                            <CircularProgressbar value={value} text={`${Math.round(value)}%`} strokeWidth={5} />
                        </section>
                        <h5>{text}</h5>
                    </section>
                )}
            </AnimatedProgressProvider>
        )}
    </VisibilitySensor>
);

CircularLoader.defaultProps = {
    color: ''
};

export default CircularLoader;