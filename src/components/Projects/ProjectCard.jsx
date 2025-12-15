<div className="project-image">
  <div style={{
    width: '100%',
    height: '200px',
    background: `linear-gradient(135deg, ${project.id % 2 === 0 ? '#4a5d23' : '#b22222'}, #333)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }}>
    {project.title}
  </div>
</div>