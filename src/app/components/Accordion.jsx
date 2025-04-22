// src/components/Accordion.js
'use client'
import React, { useState } from 'react';
import AccordionSection from './AccordionSection';

const Accordion = ({ workData }) => {
    const [openSection, setOpenSection] = useState(null);
  
    const handleSectionClick = (index) => {
      setOpenSection(index === openSection ? null : index);
    };
  
    return (
      <div className="accordion">
        {workData.map((section, index) => (
          <AccordionSection
            key={index}
            title={section.title}
            content={section.content}
            isOpen={index === openSection}
            onClick={() => handleSectionClick(index)}
          />
        ))}
      </div>
    );
  };
  

export default Accordion;
