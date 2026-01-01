import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: 'Generative AI',
        skills: ['Model Fine-tuning', 'RAG'],
        ascii: `
    ________  ______ ______
   / ____/ / / / __ /_  __/
  / / __/ /_/ / /_/ // /   
 / /_/ / __  / ____// /    
 \____/_/ /_/_/    /_/     `
    },
    {
        category: 'Languages',
        skills: ['Python', 'C++'],
        ascii: `
       __   __
      / /  / /
     / /  / / 
    / /__/ /  
   /____/_/   `
    },
    {
        category: 'Core Concepts',
        skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'Neural Networks'],
        ascii: `
     ______
    / ____/
   / /     
  / /___   
  \____/   `
    }
];

const Skills = () => {
    return (
        <section className="skills-section terminal-window">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">skills.sh</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">garv@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> ls -la ~/skills/</span>
                </div>

                <div className="skills-output">
                    <div className="output-line text-gray">
                        total {skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)} skills
                    </div>

                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category-block"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="ascii-art-small">
                                {category.ascii}
                            </div>
                            <div className="category-header">
                                <span className="text-cyan">drwxr-xr-x</span>
                                <span className="text-white"> {category.skills.length} garv staff </span>
                                <span className="text-yellow">{category.category}/</span>
                            </div>
                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-item"
                                        style={{ animationDelay: `${index * 0.2 + skillIndex * 0.1}s` }}
                                    >
                                        <span className="text-green">├──</span>
                                        <span className="terminal-tag">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="command-line" style={{ marginTop: '1rem' }}>
                    <span className="prompt">garv@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> echo "Total expertise loaded"</span>
                </div>
                <div className="output-line">
                    <span className="text-green">Total expertise loaded</span>
                    <span className="text-green"> ✓</span>
                    <span className="pulse-dot" style={{ marginLeft: '10px' }}></span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
