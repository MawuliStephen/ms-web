'use client'
import React, { useState } from "react";
import { Tabs, Tab, Box } from '@mui/material';
import Accordion from "../../components/Accordion";
import Meta


const workData = [
    {
        id: "1",
        title: "Experience",
        // role: "Ride",
        content: [
            {
                company: "Letshego Ghana",
                role: "Sales Consultant",
                startDate: "Febuary 1, 2015",
                endDate: "Present",
                work: [
                    "Conducting sales presentations to demonstrate products benefits to potential clients.",
                    "Excellent in establishing and maintaining healthy and long-term relationships with clients. A trait that is phenominal in generating repeat business and referrals.",
                    "Able to identify needs of customers’ and present how the company's products solves them.",
                    "Expert in using key promotional reduments like cold calling, emails, and social media to reach, convince and keep potential clients.",
                    "Achieving sales targets",
                    "Worked with or provided insight to other collegues to contribute or complete selected task"
                ]

            },

            {
                company: "Cradx Company Ltd",
                role: "Marketing Lead",
                startDate: "July 25, 2020",
                endDate: "Present",
                work: [
                    "Supervise and products and new product development",
                    "Responsible for writing contents products",
                    "Assist customer to develop contents for their products, this includes writing, editing of their contents",
                    // "Responsible for brand management",
                ]

            }
        ],
    },
    {
        id: "2",
        title: "Projects",
        content: [
            {
                company: "233Bite",
                role: "Content Writing & Testing",
                startDate: "July 10",
                endDate: "Present",
                work: ["233bite.com project is a productised service of Cradx Company Limited. The aim of the project is to offer affordable food and also address some challengies in the local market. As a member of the team, I am responsible to develop content for the website and testing.", ""]

            },
            {
                company: "djangoCon Africa 2023",
                role: "Developer",
                startDate: "July 10",
                endDate: "Present",
                work: ["Djangocon Africa's website for the year 2023 is a project I volunteer to do. I joined other developers and volunteers around the world to ensure a working website for the event that happened in Zanziba ", "https://2023.djangocon.africa/"]

            },
            {
                company: "Creatives Coterie",
                role: "Developer",
                startDate: "May 2023",
                endDate: "June 2023",
                work: ["Creatives Coterie is community seeking the wellbeing of people.", "https://creativescgh.com/"]

            },
            {
                company: "Mawuli Stephen",
                role: "Developer",
                startDate: "March 2024",
                endDate: "March 2024",
                work: ["A portfolio website developed and maintained for Mawuli Stephen. https://mawulistephen.com/", ""]

            }
        ],
    },
    {
        id: "2",
        title: "Volunteering",
        content: [
            {
                company: "Rails Girls Ghana",
                role: "Co -organizer",
                startDate: "September 2020",
                endDate: "Present",
                work: [
                    "Managing communication with attendies and contents for social media ",
                    "Raised funds to cater for workshop expensives through sponsorship sourcing",
                    "Worked on logistics including accomdations and food for attendess and coaches",
                    'Successfully organized three workshops; Rails Girls Kumasi 2020, Rails Girls Tamele 2021 and Rails Kumasi 2022',
                    "All events have over thousand attendies in total"
                ]
            },
            {
                company: "Ghana Think Foundation",
                role: "National Volunteers Day",
                startDate: "November 2021",
                // endDate: "2021",
                work: [
                    "Joined other volunteers to observe the National Volunteers Day by cleaning some areas in Kumasi. The event is organized by the Ghana Think Foundation. ",

                ]
            }
        ],
    },


];


const Data = [
    {
        id: "1",
        title: "Marketing",
        content: ["Advertising", 'Sales', 'Marketing Research', 'Content Marketing', 'Digital Marketing', 'Affiliate Marketing', 'Customer Services'],
    },
    {
        id: "2",
        title: "Technology",
        content: ["Software Engineer", " Web-developer", ' |', 'Interaction Design', 'User Interface / Experience Design'],
    },
    {
        id: "3", // Use a unique ID for UI/UX
        title: "Tools & Software",
        content: ["Photoshop", 'Figma', 'Adobe XD', ' |', 'Node Js', 'JavaScript', 'React Js', 'CSS', 'HTML', 'Github', ' |', 'Google workspace', ' Google Ads', 'Meta Ads', 'SEO', 'Wordpress'],
    },
    {
        id: "4", // Use a unique ID for UI/UX
        title: "Others",
        content: ['Quick Learner', 'Public Speaking', "Excellent Communicator", 'Problem Solver', 'Creative Thinker'],
    },
];




const CustomTabPanel = ({ value, index, children }) => {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

const AboutPage = () => {
    // DocumentTitle("Mawuli Stephen | AboutPage me")

    const [value, setValue] = useState(0); // Initialize with the default tab index (0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bg-blur-2">

            <div className="container">
                <hr />
                <hr />
                <hr />


                <div className="subtitle">
                    <h3>About Me</h3>

                    <a href="./blog">More</a>
                </div>

                <p>
                    {" "}
                    <p> Mawuli Stephen is an experienced marketing professional and an agile Software developer. I work with a result-oriented attitude with client expectation in mind. </p>

                    <p> With the experience of providing the services above for a decade, I have proven skills to increase the sales number thereby enchancing the revenue expectation of customers over time. </p>

                    <p>
                        As a tech enthusiasts and a volunteer,  I  spend my leisure hours relating to nature with sounds from my guitar and putting pieces of words together in a poetic rhythm.
                    </p>

                </p>



                <hr />
                <hr />
                <hr />



                <div className="subtitle">
                    <h3>Core Competencies</h3>
                </div>

                <Tabs value={value} onChange={handleChange} aria-label="tabbed component">
                    {Data.map((item) => (
                        <Tab key={item.id} label={item.title} />
                    ))}
                </Tabs>
                {Data.map((item, index) => (
                    <CustomTabPanel key={item.id} value={value} index={index}>
                        {item.content.map((duty, dutyIndex) => (
                            <button style={{}} key={dutyIndex}>{duty}</button>
                        ))}
                    </CustomTabPanel>
                ))}


                <hr />
                <hr />
                <hr />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Accordion workData={workData} />

                </div>

                <hr />
                <hr />
                <hr />

                <div className="middle heroColor" style={{ padding: '10px', }}>

                    <div className="col text-start">
                        <h3>Hobbies</h3>
                        <div className="row">
                            <div className="col">
                                <button>Cooking</button>
                                {/* <button>Music</button> */}
                                <button>Talking</button>
                                <button>Drawing</button>
                                <button>Guitar</button>
                                <button>Writng</button>
                                <button>Poetry</button>
                            </div>
                        </div>

                    </div>

                </div>

                <hr />
                <hr />
                <hr />

            </div>
        </div>
    );
};

export default AboutPage;



// import React from 'react'

// const AboutPage = () => {
//   return (
//     <div>AboutPage</div>
//   )
// }

// export default AboutPage