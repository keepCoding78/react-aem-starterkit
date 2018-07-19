import React from 'react';

import './styles/index.css';

const OverviewGraph = ({ total, remaining, fulfilled, inTransit }) => {
  const percentCompleted = (remaining / total) * 100;
  let graphType = 'high';
  
  if (percentCompleted >= 50) {
    graphType = 'high';
  } else if (percentCompleted > 25) {
    graphType = 'mid';
  } else {
    graphType = 'low';
  }

  return (
    <div className="overview-graph">
      <div>
        <div
          tooltip={`Remaining ${remaining}`}
          className={`graphBar remaining-bar ${graphType}`}
          style={remaining ? { width: `${Math.ceil(remaining / total * 100)}%` } : { display: 'none' }}
        />
        <div
          tooltip={`In Transit ${inTransit}`}
          className={`graphBar intransit-bar ${graphType}`}
          style={inTransit ? { width: `${Math.floor(inTransit / total * 100)}%` } : { display: 'none' }}
        />
        <div
          tooltip={`Fullfilled ${fulfilled}`}
          className={`graphBar fulfilled-bar ${graphType}`}
          style={fulfilled ? { width: `${Math.floor(fulfilled / total * 100)}%` } : { display: 'none' }}
        />
      </div>
    </div>
  );
};

export default OverviewGraph;
