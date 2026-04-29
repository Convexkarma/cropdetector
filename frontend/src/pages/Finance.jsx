import React from 'react';
import { CircleDollarSign, TrendingUp, ShieldCheck, Wallet } from 'lucide-react';

const Finance = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Finance & Insurance</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your farm's finances, apply for micro-loans, and get insured.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Wallet / Balance */}
        <div className="glass-card" style={{ padding: '2rem', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Wallet size={24} />
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem' }}>Active</span>
          </div>
          <p style={{ opacity: 0.9, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Expected Season Revenue</p>
          <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'white' }}>KES 145,000</h2>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button className="btn" style={{ background: 'white', color: 'var(--primary-dark)', flex: 1 }}>Withdraw</button>
            <button className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', flex: 1, border: '1px solid rgba(255,255,255,0.3)' }}>Add Funds</button>
          </div>
        </div>

        {/* Micro-Loans */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <CircleDollarSign size={24} style={{ color: 'var(--secondary)' }} />
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Input Financing</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Get instant credit for seeds and fertilizers based on your farm's AI health score.</p>
          
          <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--surface-alt)', borderRadius: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem' }}>Pre-approved Limit</span>
              <span style={{ fontWeight: '600' }}>KES 20,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.9rem' }}>Interest Rate</span>
              <span style={{ fontWeight: '600' }}>4% / month</span>
            </div>
          </div>
          
          <button className="btn" style={{ width: '100%', border: '1px solid var(--secondary)', color: 'var(--secondary)', background: 'transparent' }}>Apply for Loan</button>
        </div>

        {/* Insurance */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ShieldCheck size={24} style={{ color: 'var(--warning)' }} />
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Crop Insurance</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Protect your yields against severe weather, pests, and diseases.</p>
          
          <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--warning-light)', borderRadius: '0.5rem', color: '#b45309' }}>
            <strong>High Risk Alert:</strong> Late Blight in your region. Insure your tomatoes now.
          </div>
          
          <button className="btn" style={{ width: '100%', background: 'var(--warning)', color: 'white' }}>Get Covered (KES 1,500/Acre)</button>
        </div>

      </div>
    </div>
  );
};

export default Finance;
