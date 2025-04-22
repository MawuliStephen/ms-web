// src/components/WorkSection.js
import React from "react";


const WorkSection = ({ company, role, startDate, endDate, work }) => {

    return (
        <div className="work-section mb-5">
            <div className="work-title">
                <h3>{company} </h3>
                <h4>{role}</h4>

            </div>

            <div className="work-dates">
                <h5>{startDate} - {endDate} </h5>
            </div>

            <ul className=" work-list" style={{ display: 'flex', flexDirection: 'column' }}>
                {work.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkSection;
