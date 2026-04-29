import React, { useState } from 'react';
import { User, MapPin, Save, Bell, Shield } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Samuel M.',
    phone: '+254 712 345 678',
    location: 'Nakuru County',
    farmSize: '5',
    soilType: 'Loam',
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Profile & Settings</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your personal details and farm configuration.</p>
      </header>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <User size={40} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{profile.name}</h2>
            <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
              <MapPin size={16} /> {profile.location}
            </div>
          </div>
        </div>

        <form>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>Personal Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
              <input type="text" value={profile.name} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} readOnly />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
              <input type="text" value={profile.phone} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} readOnly />
            </div>
          </div>

          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>Farm Configuration</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Farm Size (Acres)</label>
              <input type="number" value={profile.farmSize} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} onChange={e => setProfile({...profile, farmSize: e.target.value})} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Primary Soil Type</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} value={profile.soilType} onChange={e => setProfile({...profile, soilType: e.target.value})}>
                <option value="Loam">Loam</option>
                <option value="Clay">Clay</option>
                <option value="Sandy">Sandy</option>
                <option value="Silt">Silt</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button type="button" className="btn" style={{ background: 'var(--surface-alt)' }}>Cancel</button>
            <button type="button" className="btn btn-primary"><Save size={18} /> Save Changes</button>
          </div>
        </form>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
          <div style={{ padding: '0.75rem', background: 'var(--warning-light)', color: 'var(--warning)', borderRadius: '0.5rem' }}>
            <Bell size={24} />
          </div>
          <div>
            <div style={{ fontWeight: '600' }}>Notification Settings</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Manage SMS and push alerts</div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
          <div style={{ padding: '0.75rem', background: 'var(--success-light)', color: 'var(--success)', borderRadius: '0.5rem' }}>
            <Shield size={24} />
          </div>
          <div>
            <div style={{ fontWeight: '600' }}>Privacy & Security</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Manage account security</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
