
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

return (
    <div className="progress">
    <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}%` ,backgroundColor:"#AB1331"}}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
    >
    </div>
    </div>
);
};

export default ProgressBar;
