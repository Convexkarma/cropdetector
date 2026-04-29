import React from 'react';
import { CloudRain, ThermometerSun, Wind, Droplets, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Overview</h1>
        <p style={{ color: 'var(--text-muted)' }}>Farm health status and weather predictions for today.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Weather & Disease Risk Widget */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <CloudRain size={20} className="text-secondary" /> Weather Context
            </h3>
            <span className="badge badge-High" style={{ fontSize: '0.75rem' }}>Live Data Mock</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ textAlign: 'center' }}>
              <ThermometerSun size={24} style={{ color: 'var(--warning)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: '600' }}>28°C</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Temp</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Droplets size={24} style={{ color: 'var(--secondary)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: '600' }}>85%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Humidity</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Wind size={24} style={{ color: 'var(--text-muted)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: '600' }}>12 km/h</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Wind</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⚠️ Disease Risk Alert
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              High humidity (85%) over the last 48 hours significantly increases the risk of <strong>Late Blight</strong> in Tomatoes and <strong>Rust</strong> in Wheat.
            </p>
            <Link to="/diagnostics" className="btn btn-primary" style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
              Run Diagnostic Scan <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Crop Growth Stage Tracker Widget */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <Leaf size={20} style={{ color: 'var(--primary)' }} /> Growth Tracker
            </h3>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600' }}>Maize (Plot A)</span>
              <span className="badge badge-Medium">Vegetative Stage</span>
            </div>
            {/* Timeline Bar */}
            <div style={{ height: '8px', background: 'var(--surface-alt)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: '25%', background: 'var(--success)' }}></div>
              <div style={{ width: '25%', background: 'var(--primary)', position: 'relative' }}>
                 <div style={{ position: 'absolute', right: 0, top: '-4px', width: '16px', height: '16px', background: 'white', border: '3px solid var(--primary)', borderRadius: '50%' }}></div>
              </div>
              <div style={{ width: '25%', background: 'transparent' }}></div>
              <div style={{ width: '25%', background: 'transparent' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <span>Germination</span>
              <span>Vegetative</span>
              <span>Flowering</span>
              <span>Harvest</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600' }}>Tomatoes (Plot B)</span>
              <span className="badge badge-Low">Flowering Stage</span>
            </div>
            {/* Timeline Bar */}
            <div style={{ height: '8px', background: 'var(--surface-alt)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: '25%', background: 'var(--success)' }}></div>
              <div style={{ width: '25%', background: 'var(--success)' }}></div>
              <div style={{ width: '25%', background: 'var(--primary)', position: 'relative' }}>
                <div style={{ position: 'absolute', right: 0, top: '-4px', width: '16px', height: '16px', background: 'white', border: '3px solid var(--primary)', borderRadius: '50%' }}></div>
              </div>
              <div style={{ width: '25%', background: 'transparent' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <span>Seedling</span>
              <span>Vegetative</span>
              <span>Flowering</span>
              <span>Fruiting</span>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--surface-alt)', borderRadius: '0.5rem', fontSize: '0.9rem' }}>
            <strong>Recommendation:</strong> Tomatoes need higher phosphorus during flowering. Check soil health.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
