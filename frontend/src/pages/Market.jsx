import React from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';

const Market = () => {
  const products = [
    { id: 1, name: 'DAP Fertilizer 50kg', category: 'Fertilizer', price: 3500, image: '🌱', vendor: 'Mavuno Agri' },
    { id: 2, name: 'Hybrid Maize Seeds (DK 8031)', category: 'Seeds', price: 4200, image: '🌽', vendor: 'Kenya Seed Co.' },
    { id: 3, name: 'CAN Top Dressing 50kg', category: 'Fertilizer', price: 3200, image: '🌱', vendor: 'Mavuno Agri' },
    { id: 4, name: 'Fall Armyworm Pesticide 1L', category: 'Pesticide', price: 1500, image: '🐛', vendor: 'AgriCare' },
    { id: 5, name: 'Tomato Seeds (Rio Grande)', category: 'Seeds', price: 850, image: '🍅', vendor: 'Simlaw' },
    { id: 6, name: 'Fungicide (Copper based)', category: 'Pesticide', price: 1200, image: '🦠', vendor: 'AgriCare' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Agri-Market</h1>
          <p style={{ color: 'var(--text-muted)' }}>Buy certified seeds, fertilizers, and pesticides.</p>
        </div>
        <button className="btn btn-primary" style={{ position: 'relative' }}>
          <ShoppingCart size={20} />
          <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--danger)', color: 'white', borderRadius: '50%', padding: '0.1rem 0.4rem', fontSize: '0.75rem' }}>2</span>
        </button>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" placeholder="Search for products..." style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} />
        </div>
        <button className="btn" style={{ background: 'white', border: '1px solid var(--border)' }}>
          <Filter size={20} /> Filters
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {products.map(product => (
          <div key={product.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>{product.image}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span className="badge badge-Low" style={{ fontSize: '0.7rem' }}>{product.category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{product.vendor}</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem' }}>
              <span style={{ fontWeight: '700', color: 'var(--primary-dark)', fontSize: '1.2rem' }}>KES {product.price.toLocaleString()}</span>
              <button className="btn" style={{ background: 'var(--surface-alt)', padding: '0.5rem 1rem' }}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
