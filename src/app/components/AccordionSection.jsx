'use client'
import React from 'react';
import WorkSection from './WorkSection';

const AccordionSection = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`accordion-section ${isOpen ? 'open' : ''}`}>

            <div className="accordion-toggle subtitle" onClick={onClick}>
                <h3>{title}</h3>
                <span>{isOpen ? "-" : "+"}</span>
            </div>

            {isOpen && (
                <div>
                    {content.map((workItem, idx) => (
                        <WorkSection
                            key={idx}
                            company={workItem.company}
                            role={workItem.role}
                            startDate={workItem.startDate}
                            endDate={workItem.endDate}
                            work={workItem.work}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AccordionSection;
