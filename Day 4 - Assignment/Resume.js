// // Create your own resume data in JSON format

var resume = {
    "Contact": {
        "Name": "Balachandra Sangammanavar",
        "Phone": "+91 8951587126",
        "Email": "Balachandrabss@Gmail.Com"
    },
    "Career Objective": "Seeking a technical writing role that leverages my expertise in creating high-quality documentation within a dynamic environment. I am eager to contribute to positions offering professional development and learning opportunities.",
    "Professional Skills": [
        "Experienced and Certified Technical Writer with strong Technical Knowledge.",
        "Avo Assure product (Avo Automation Project) experience in creating, editing, producing, and maintaining various documentation types.",
        "Proficient in DITA, XML, Topic, and Structured authoring standards.",
        "Familiarity with HTML, CSS, JavaScript, and GitHub.",
        "Expertise in MSTP, Simplified Technical English (STE), and project-specific style guides.",
        "Skilled in technical documentation management, including scoping, planning, scheduling, and negotiating.",
        "Comfortable interacting with SMEs and business analysts.",
        "Efficient data collection from SMEs, Technical staff, and Developers for managing multiple projects.",
        "Engaging with different teams to complete high-priority tasks within estimated hours.",
        "Passionate about transforming complex technical concepts into clear, concise, user-focused content.",
        "Actively learning MERN full-stack development.",
        "Possess insightful knowledge of the software and document development life cycles."
    ],
    "Technical Skills": {
        "Publishing Tools": ["GitBook", "Adobe FrameMaker", "Arbor text Editor", "Microsoft Word"],
        "Videos Creating Tool": ["Arcade Videos"],
        "Online Help Tool": ["Adobe RoboHelp"],
        "Web Design": ["HTML"],
        "Capturing Tools": ["Snagit", "Snipping tool"],
        "Graphic Tools": ["Adobe Photoshop", "MS-Paint"],
        "Presentation Tools": ["Microsoft PowerPoint"]
    },
    "Professional Work Experience": [
        {
            "Company": "SLK Software Pvt Ltd",
            "Location": "Bangalore",
            "Date": "Sep 2022 to Present",
            "Position": "Executive Content Writer",
            "Roles and Responsibilities": [
                "Research and gather technical information, collaborating with software development, testing, and support teams.",
                "Follow Agile methodology in the team and successfully update the documentation to catch up with the latest release cycle.",
                "Draft Release Notes detailing the latest release items, including new features, enhancements, and bug fixes.",
                "Conduct automation testing on ERP applications (SAP, Oracle E-Business Suite, and Salesforce) and create documentation for ERP applications.",
                "Responsible for handling the complete product documentation that involved how-to guides, instruction manuals, user guides, administrator guides, keyword guide, and product FAQs.",
                "Perform usability tests and suggest changes to user interfaces.",
                "Evaluating bugs for impact on documentation; planned, assigned, and tracked documentation tasks; and wrote and edited deliverables as needed.",
                "Creating use case videos for products to show potential customers how the product can be used in a real-world scenario.",
                "Perform peer reviews and consistency checks during the technical and final editing.",
                "Conducted training for new hires, imparting knowledge-sharing sessions to peers and business users."
            ]
        },
        {
            "Company": "TLE Technologies Pvt Ltd",
            "Location": "Bangalore",
            "Date": "Jun 2021 to Dec 2021",
            "Position": "Technical Writer cum Senior Engineer",
            "Roles and Responsibilities": [
                "Planned and prepared the user guide and installation guide for internal software.",
                "Involved in weekly discussions with SMEs and on-site clients.",
                "Created the document as per the Document Development Life Cycle.",
                "Worked on Structure Documentation, Topic-based Authoring, XML and DITA.",
                "Created documents with MSTP, Simplified Technical English (STE), and project-specific style guides.",
                "Created user-friendly documents from technically complex data.",
                "Responsible for quality assurance, peer reviews, and production delivery in the estimated time."
            ]
        },
        {
            "Company": "Pierian Services",
            "Location": "Bangalore",
            "Date": "FEB 2021 to May 2021",
            "Position": "Technical Writer cum Documentation Engineer",
            "Roles and Responsibilities": [
                "Prepare Product Information Manuals, User Guides, Help files, and Training material.",
                "Created user documents using FrameMaker, RoboHelp, and Snagit.",
                "Ensured that all documents created or updated were clear, concise, professional, and correct.",
                "Participate in technical discussions, client meetings, and support team members.",
                "Created documents with MSTP, Simplified Technical English (STE), and project-specific style guides."
            ]
        },
        {
            "Company": "Sonovision Aetos Technical Services (P) Ltd",
            "Location": "Bangalore",
            "Date": "May 2017 to May 2020",
            "Position": "Technical Writer cum Associative Engineer",
            "Roles and Responsibilities": [
                "Followed technical documentation management, including scoping, planning, scheduling & negotiating with clients for iterative product development and delivery, and balancing the delivery timelines/milestones as per quality & standards.",
                "Play lead roles in team meetings to discuss and develop technical documentation standards and write best practices.",
                "Created user documents to generalize technical content using Arbor Text Editor and Frame maker.",
                "Developed/Maintained templates for technical documents as per customer requirements.",
                "Responsible member of the team for quality control and delivery.",
                "Lead the illustration team and actively contribute to employee engagement activities."
            ]
        }
    ],
    "Education": {
        "Degree": "B.E Mechanical Engineering",
        "Year": "2016",
        "Institution": "Rural Engineering College",
        "Location": "Hulkoti"
    },
    "Achievements": [
        "Received STAR award for quality, on-time delivery, and coordination with the offshore team.",
        "Team Lead for the illustration team at Sonovision Aetos, Bangalore.",
        "Active volunteer for organizing employee engagement activities."
    ],
    "Leadership": [
        "Team Lead for illustration team, Sonovision Aetos, Bangalore.",
        "Active volunteer for organizing employee engagement activities."
    ],
    "Certifications": [
        "Technical Writing certification from Winprotech IT Solutions, Bangalore."
    ],
    "Hobbies": ["Cooking", "Listening to Music", "Reading books"]
}
var resumeJSONFormat = JSON.stringify(resume);
console.log(resumeJSONFormat);