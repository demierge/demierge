import React from 'react';
import './Summary.css';

const Summary = () => {
    return (
        <section className="summary-section terminal-window slide-in-up">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">about.sh</div>
            </div>

            <div className="terminal-content">
                <div className="command-line">
                    <span className="prompt">garv@portfolio</span>
                    <span className="text-white">$</span>
                    <span className="command"> ./about.sh --verbose</span>
                </div>

                {/* Loading Animation */}
                <div className="loading-section">
                    <div className="loading-line">
                        <span className="text-cyan">[*]</span>
                        <span className="text-white"> Loading profile data...</span>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                    <div className="loading-line">
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Profile loaded successfully</span>
                    </div>
                </div>

                <div className="summary-content">
                    <div className="summary-line">
                        <span className="text-green">[INFO]</span>
                        <span className="text-white"> Motivated second-year B.Tech student specializing in </span>
                        <span className="text-cyan">Computer Science</span>
                        <span className="text-white"> with a focus on </span>
                        <span className="text-cyan">Artificial Intelligence</span>
                        <span className="text-white">.</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-white">Strong foundational knowledge in programming (</span>
                        <span className="text-cyan">Python, C++</span>
                        <span className="text-white">), data structures, and algorithms.</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-white">Eager to apply academic learning to real-world challenges through an</span>
                        <span className="text-cyan"> internship opportunity</span>
                        <span className="text-white">.</span>
                    </div>
                    <div className="summary-line" style={{ marginTop: '0.5rem' }}>
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Core AI concepts: </span>
                        <span className="text-purple">Machine Learning</span>
                        <span className="text-white"> & </span>
                        <span className="text-purple">Neural Networks</span>
                    </div>
                    <div className="summary-line">
                        <span className="text-green">[✓]</span>
                        <span className="text-white"> Generative AI: </span>
                        <span className="text-purple">Model Fine-tuning</span>
                        <span className="text-white">, </span>
                        <span className="text-purple">RAG</span>
                    </div>
                </div>

                {/* Tech Stack ASCII */}
                <div className="tech-stack-ascii">
                    <div className="ascii-art-small text-green">
                        {`
  ╔═══════════════════════════════════════════════════════════╗
  ║  Python │ C++ │ GenAI │ RAG │ Machine Learning │ Neural Nets║
  ╚═══════════════════════════════════════════════════════════╝
`}
                    </div>
                </div>

                <div className="summary-footer">
                    <span className="text-gray">// Profile loaded at: {new Date().toLocaleString()}</span>
                    <span className="pulse-dot" style={{ marginLeft: '10px' }}></span>
                </div>
            </div>
        </section>
    );
};

export default Summary;
