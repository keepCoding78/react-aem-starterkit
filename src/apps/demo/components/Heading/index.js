import React from 'react';

const Heading = props => {
    return (
        <div className="component-wrapper">
        <h1>{props.config.labels.heading}</h1>
        </div>
    );
};

export default Heading;
