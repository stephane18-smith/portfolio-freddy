import React from 'react';
import './Experience.css';

const Timeline = ({ experiences }) => {
  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="timeline-date">{exp.period}</div>
            <h3 className="timeline-title">{exp.title}</h3>
            <h4 className="timeline-company">{exp.company}</h4>
            <p className="timeline-location">{exp.location}</p>
            <p className="timeline-description">{exp.description}</p>
            <div className="timeline-technologies">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          <div className="timeline-marker"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;