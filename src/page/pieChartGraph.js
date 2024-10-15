// import React, { useState, useEffect } from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const PieChartGraph = ({ chartData, chartShape, updatePieChart }) => {
//     const [totalInterestPayment, setTotalInterestPayment] = useState(0);
//     const [totalPayment, setTotalPayment] = useState(0);
//     const [percentage, setPercentage] = useState(0);

//     useEffect(() => {
//         if (chartData && chartData.length > 0) {
//             const interestPayment = parseFloat(chartData[0]?.totalinterestpayment);
//             const payment = parseFloat(chartData[0]?.totalpayment);

//             if (!isNaN(interestPayment) && !isNaN(payment)) {
//                 setTotalInterestPayment(interestPayment);
//                 setTotalPayment(payment);
//                 // Calculate the percentage of total interest payment over total payment
//                 const calculatedPercentage = (interestPayment / payment) * 100;
//                 setPercentage(calculatedPercentage);
//             } else {
//                 console.error('Invalid data for circular progress bar:', chartData);
//             }
//         } else {
//             console.error('No data available for circular progress bar:', chartData);
//         }
//     }, [chartData, chartShape]);

//     const calculateFontSize = () => {
//         return chartShape === 'circle' ? '5px' : '4px';
//     };

//     return (
//         <div className="pie-chart-container" style={{ width: '100%', height: '100%',fontSize:'20px', margin: "0 auto" }}>
//             {totalPayment > 0 ? (
//                 <CircularProgressbar
//                     value={percentage}
//                     strokeWidth={16}
//                     // text={`${totalInterestPayment.toFixed(2)}`}
//                     text={(
//                         <tspan>
//                             <tspan x="50%" dy="-10" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#E38627" className="bi bi-circle-fill" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
//                                     <circle cx="8" cy="8" r="8" />
//                                 </svg>{totalInterestPayment.toFixed(2)}</tspan>
//                             <tspan x="50%" dy="20" textAnchor="middle"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgba(52, 70, 94, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16">
//                           <circle cx="8" cy="8" r="8"/>
//                         </svg>{totalPayment.toFixed(2)}</tspan>
//                         </tspan>
//                     )}
//                     styles={buildStyles({
//                         // textSize: calculateFontSize(),
//                         pathColor: '#AB1331',
//                         textColor: '#000',
//                         trailColor: '#F98685',
//                         textSize: '9px',
//                         strokeLinecap: 'butt', 
//                     })}
//                 />
//             ) : (
//                 <div className="no-data-message">No data available for the circular progress bar.</div>
//             )}
//         </div>
//     );
// };

// export default PieChartGraph;

import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PieChartGraph = ({ chartData, chartShape }) => {
    const [totalInterestPayment, setTotalInterestPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (chartData && chartData.length > 0) {
            const interestPayment = parseFloat(chartData[0]?.totalinterestpayment);
            const payment = parseFloat(chartData[0]?.totalpayment);

            if (!isNaN(interestPayment) && !isNaN(payment)) {
                setTotalInterestPayment(interestPayment);
                setTotalPayment(payment);
                // Calculate the percentage of total interest payment over total payment
                const calculatedPercentage = (interestPayment / payment) * 100;
                setPercentage(calculatedPercentage);
            } else {
                console.error('Invalid data for circular progress bar:', chartData);
            }
        } else {
            console.error('No data available for circular progress bar:', chartData);
        }
    }, [chartData, chartShape]);

    return (
        <div className="pie-chart-container" style={{ width: '100%', height: '100%', fontSize: '20px', margin: "0 auto" }}>
            {totalPayment > 0 ? (
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={16}
                    text={(
                        <tspan>
                            <tspan x="50%" dy="-10" textAnchor="middle">
                            {/* <tspan style={{ color: 'white', fontSize: '32px' }}>.</tspan> */}
                             {totalInterestPayment.toFixed(2)}
                            </tspan>
                            <tspan x="50%" dy="20" textAnchor="middle">
                                {/* Color dot for totalPayment */}
                                {/* <tspan style={{ color: 'rgba(52, 70, 94, 1)', fontSize: '12px' }}>●</tspan> */}
                                {totalPayment.toFixed(2)}
                            </tspan>
                        </tspan>
                    )}
                    styles={buildStyles({
                        pathColor: '#AB1331',
                        textColor: '#000',
                        trailColor: '#F98685',
                        textSize: '9px',
                        strokeLinecap: 'butt', 
                    })}
                />
            ) : (
                <div className="no-data-message">No data available for the circular progress bar.</div>
            )}
        </div>
    );
};

export default PieChartGraph;
