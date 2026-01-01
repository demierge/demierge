import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: 'Bachelor\'s Degree',
        field: 'Computer Science (AI)',
        institution: 'JECRC University',
        period: '2024–Present',
        grade: 'CGPA: 8'
    },
    {
        degree: 'Class 12th',
        field: 'Science',
        institution: 'RBSE',
        period: '2022',
        grade: 'Score: 83.3%'
    },
    {
        degree: 'Class 10th',
        field: 'General',
        institution: 'Some Board',
        period: '2021',
        grade: 'Score: 75.0%'
    }
];

const Education = () => {
    return (
        <section className="education-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">credentials.json</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">garv@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> cat ~/education/credentials.json | jq '.'</span>
                </div>

                {/* Education */}
                <div className="json-section">
                    <div className="json-line">
                        <span className="text-yellow">"education"</span>
                        <span className="text-white">: [</span>
                    </div>
                    {educationData.map((edu, index) => (
                        <div key={index} className="json-object">
                            <div className="json-line indent-1">{'{'}</div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"degree"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{edu.degree} in {edu.field}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"institution"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{edu.institution}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"period"</span>
                                <span className="text-white">: </span>
                                <span className="text-green">"{edu.period}"</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="json-line indent-2">
                                <span className="text-cyan">"grade"</span>
                                <span className="text-white">: </span>
                                <span className="text-purple">"{edu.grade}"</span>
                            </div>
                            <div className="json-line indent-1">
                                {'}'}
                                {index < educationData.length - 1 ? ',' : ''}
                            </div>
                        </div>
                    ))}
                    <div className="json-line">
                        <span className="text-white">]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
