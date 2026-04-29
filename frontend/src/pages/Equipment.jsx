import React from 'react';
import { Tractor, Clock, MapPin } from 'lucide-react';

const Equipment = () => {
  const equipmentList = [
    { id: 1, type: 'Massey Ferguson Tractor', hp: '75 HP', owner: 'Mwangi Farms', distance: '4 km away', price: 2500, rating: 4.8 },
    { id: 2, type: 'Water Pump (Diesel)', hp: '5 HP', owner: 'AgriRent', distance: '12 km away', price: 500, rating: 4.5 },
    { id: 3, type: 'Combine Harvester', hp: '120 HP', owner: 'Rift Valley Machineries', distance: '25 km away', price: 8000, rating: 4.9 },
    { id: 4, type: 'Plough Attachment', hp: 'N/A', owner: 'Mwangi Farms', distance: '4 km away', price: 1000, rating: 4.2 },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Equipment Rental</h1>
        <p style={{ color: 'var(--text-muted)' }}>Find and rent tractors and machinery near you.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {equipmentList.map(eq => (
          <div key={eq.id} className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: 'var(--surface-alt)', padding: '1rem', borderRadius: '50%' }}>
                <Tractor size={32} style={{ color: 'var(--primary)' }} />
              </div>
              <span className="badge badge-Monitor">⭐ {eq.rating}</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{eq.type}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{eq.hp} • by {eq.owner}</p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={16} /> {eq.distance}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={16} /> Available Now</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <div>
                <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--dark)' }}>KES {eq.price.toLocaleString()}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}> / day</span>
              </div>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
