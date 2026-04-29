import React from 'react';
import { Calendar, Sun, CloudRain } from 'lucide-react';

const Planning = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Planning</h1>
        <p style={{ color: 'var(--text-muted)' }}>Seasonal planting recommendations based on historical climate data.</p>
      </header>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Current Season: Long Rains (MAM)</h2>
            <p style={{ color: 'var(--text-muted)' }}>March - April - May</p>
          </div>
          <CloudRain size={48} style={{ color: 'var(--primary)' }} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Recommended Crops</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>🌽 Maize (Hybrid)</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Plant early to capitalize on the onset of rains. Risk of Fall Armyworm is high.</p>
              <span className="badge badge-Low">High Yield Potential</span>
            </div>

            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>🥔 Irish Potatoes</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Excellent cash crop for this season. Ensure good drainage to prevent tuber rot.</p>
              <span className="badge badge-Medium">High Blight Risk</span>
            </div>

            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>🫘 Beans (Bush varieties)</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Intercrop with maize. Fast maturing and improves soil nitrogen.</p>
              <span className="badge badge-Low">Low Risk</span>
            </div>

          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Upcoming Season: Short Rains (OND)</h2>
            <p style={{ color: 'var(--text-muted)' }}>October - November - December</p>
          </div>
          <Sun size={48} style={{ color: 'var(--warning)' }} />
        </div>
        <p style={{ color: 'var(--text-muted)' }}>Predictions indicate below-average rainfall. Prepare drought-resistant varieties like Sorghum or Green Grams.</p>
      </div>
    </div>
  );
};

export default Planning;
