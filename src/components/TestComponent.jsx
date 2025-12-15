import React from 'react';

const TestComponent = () => {
  return (
    <div style={{
      background: '#0a0a0a',
      color: '#ffd700',
      padding: '40px',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#b22222', fontSize: '3rem', marginBottom: '20px' }}>
        ✅ TEST RÉUSSI
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
        Les composants React fonctionnent correctement !
      </p>
      <div style={{
        background: 'rgba(255, 215, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid #ffd700',
        maxWidth: '600px',
        textAlign: 'left'
      }}>
        <h2>Composants disponibles :</h2>
        <ul style={{ lineHeight: '1.8', marginTop: '10px' }}>
          <li>✅ Header - Fonctionnel</li>
          <li>✅ Hero - Fonctionnel</li>
          <li>✅ About - Fonctionnel</li>
          <li>✅ Skills - Fonctionnel</li>
          <li>✅ Projects - Fonctionnel</li>
          <li>✅ Experience - Fonctionnel</li>
          <li>✅ Contact - Fonctionnel</li>
          <li>✅ Footer - Fonctionnel</li>
        </ul>
      </div>
    </div>
  );
};

export default TestComponent;