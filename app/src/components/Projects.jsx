import React from 'react';
import './Projects.css';

const projectsData = [
    {
        name: 'MedGPT - Fine-Tuned Chatbot for Medical FAQs',
        startDate: 'Project',
        endDate: 'Completed',
        summary: 'Fine-tuned LLAMA-2-7B on medical FAQ datasets using LoRA.',
        highlights: [
            'Fine-tuned LLAMA-2-7B using LoRA for parameter efficiency',
            'Implemented contextual memory for multi-turn conversations',
            'Applied prompt engineering to minimize hallucinations',
            'Evaluated using BLEU, ROUGE metrics',
            'Deployed Streamlit interface for real-time interaction'
        ],
        tech: ['Python', 'LLAMA-2', 'LoRA', 'Streamlit'],
        ascii: `
    __  ___          ________  ____  ______
   /  |/  /___  ____/ / ____/ / __ \\/_  __/
  / /|_/ / __ \\/ __  / / __  / /_/ / / /   
 / /  / / /_/ / /_/ / /_/ / / ____/ / /    
/_/  /_/\\___/ \\__,_/\\____/ /_/     /_/     `
    },
    {
        name: 'MedRAG - Custom RAG System',
        startDate: 'Project',
        endDate: 'Completed',
        summary: 'End-to-end RAG pipeline for healthcare document querying.',
        highlights: [
            'Designed RAG pipeline with FAISS vector retrieval',
            'Utilized sentence embeddings for semantic search',
            'Implemented chunking, metadata filtering, and citations',
            'Integrated Streamlit interface for PDF uploading',
            'Optimized retrieval via context-window tuning'
        ],
        tech: ['Python', 'RAG', 'FAISS', 'LLM', 'Streamlit'],
        ascii: `
    __  ___          ______  ___   ______
   /  |/  /___  ____/ / __ \\/   | / ____/
  / /|_/ / __ \\/ __  / /_/ / /| |/ / __  
 / /  / / /_/ / /_/ / _, _/ ___ / /_/ /  
/_/  /_/\\___/ \\__,_/_/ |_/_/  |_\\____/   `
    }
];

const Projects = () => {
    return (
        <section className="projects-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">projects.md</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">garv@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> cat ~/projects/README.md</span>
                </div>

                <div className="projects-output">
                    <div className="markdown-header">
                        <span className="text-cyan">#</span>
                        <span className="text-white"> Featured Projects</span>
                    </div>

                    {/* Projects ASCII Art Banner */}
                    <div className="projects-banner">
                        <div className="ascii-art-small text-orange">
                            {`
  ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
  ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
  ██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
  ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
  ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
`}
                        </div>
                    </div>

                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-block"
                            style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                        >
                            {/* Project ASCII Art */}
                            <div className="project-ascii">
                                <div className="ascii-art-small text-yellow">
                                    {project.ascii}
                                </div>
                            </div>

                            <div className="project-header">
                                <span className="text-cyan">##</span>
                                <span className="text-yellow"> {project.name}</span>
                            </div>

                            <div className="project-meta">
                                <span className="text-gray">**Timeline:** </span>
                                <span className="text-white">{project.startDate} → {project.endDate}</span>
                                {project.endDate === 'Current' && <span className="pulse-dot" style={{ marginLeft: '10px' }}></span>}
                            </div>

                            <div className="project-summary">
                                <span className="text-white">{project.summary}</span>
                            </div>

                            <div className="project-tech">
                                <span className="text-gray">**Tech Stack:** </span>
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="terminal-tag"
                                        style={{ animationDelay: `${0.6 + index * 0.2 + idx * 0.05}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-highlights">
                                <div className="text-gray">**Key Achievements:**</div>
                                {project.highlights.map((highlight, idx) => (
                                    <div
                                        key={idx}
                                        className="project-highlight-line"
                                        style={{ animationDelay: `${0.7 + index * 0.2 + idx * 0.05}s` }}
                                    >
                                        <span className="text-green">•</span>
                                        <span className="text-white"> {highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {index < projectsData.length - 1 && (
                                <div className="project-divider">
                                    <span className="text-gray">{'─'.repeat(80)}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="projects-footer">
                    <span className="text-gray">// End of projects.md</span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
