import React, { useState, useEffect } from 'react';

export default function EMITable({jsonData}) {
    console.log(typeof(jsonData));
    return (
        <div>
            {jsonData && (
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <td scope="col" style={{fontWeight:'700'}}>Product</td>
                            <td scope="col" style={{fontWeight:'700'}}>Ratetype</td>
                            <td scope="col" style={{fontWeight:'700'}}>Rate</td>
                            <td scope="col" style={{fontWeight:'700',width:'40%'}}>Monthly EMI (Principal+Interest)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{row.product}</td>
                                <td>{row.ratetype}</td>
                                <td>{row.rate}</td>
                                <td>{row.monthpayment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
    </div>
)

}