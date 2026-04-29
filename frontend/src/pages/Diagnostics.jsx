import React, { useState, useRef } from 'react';
import { Camera, TestTube, UploadCloud, AlertCircle } from 'lucide-react';

const Diagnostics = () => {
  const [activeTab, setActiveTab] = useState('visual'); // visual, soil
  const [cropType, setCropType] = useState('maize');
  
  // Visual Scan State
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);

  // Soil Health State
  const [soilData, setSoilData] = useState({ ph: '', nitrogen: '', phosphorus: '', potassium: '' });
  const [soilResult, setSoilResult] = useState(null);

  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const startAnalysis = () => {
    if (!selectedImage) return;
    setStep(2);
    
    // Expanded Mock Logic
    setTimeout(() => {
      const fname = selectedImage.name.toLowerCase();
      let data;
      
      if (cropType === 'maize' && fname.includes('pest')) {
        data = {
          issue_type: "Pest", issue_name: "Fall Armyworm", confidence: 0.95, severity: "High", urgency: "Immediate",
          treatment: ["Apply recommended pesticide immediately", "Handpick larvae if infestation is small", "Destroy heavily infested plants"],
          treatment_cost_kes: 2500, yield_loss_percent: 50, financial_loss_kes: 15000, market_price_per_kg: 50, buyers: ["Local Cooperative"]
        };
      } else if (cropType === 'tomato') {
        data = {
          issue_type: "Disease", issue_name: "Tomato Late Blight", confidence: 0.92, severity: "High", urgency: "Immediate",
          treatment: ["Apply copper-based fungicide", "Destroy heavily infected plants", "Avoid overhead watering"],
          treatment_cost_kes: 1500, yield_loss_percent: 60, financial_loss_kes: 25000, market_price_per_kg: 80, buyers: ["City Groceries"]
        };
      } else if (fname.includes('healthy')) {
        data = {
          issue_type: "Status", issue_name: "Healthy Crop", confidence: 0.98, severity: "Low", urgency: "Monitor",
          treatment: ["Maintain current schedule"],
          treatment_cost_kes: 0, yield_loss_percent: 0, financial_loss_kes: 0, market_price_per_kg: 55, buyers: ["Local Market"]
        };
      } else {
        data = {
          issue_type: "Disease", issue_name: `${cropType.charAt(0).toUpperCase() + cropType.slice(1)} Blight/Rust`, confidence: 0.87, severity: "High", urgency: "Immediate",
          treatment: ["Apply fungicide within 24 hours", "Remove infected leaves"],
          treatment_cost_kes: 2000, yield_loss_percent: 40, financial_loss_kes: 12000, market_price_per_kg: 50, buyers: ["Local Cooperative"]
        };
      }
      setResults(data);
      setStep(3);
    }, 1500);
  };

  const analyzeSoil = (e) => {
    e.preventDefault();
    setSoilResult(null);
    // Simple mock soil analysis logic
    setTimeout(() => {
      const ph = parseFloat(soilData.ph);
      if (ph < 5.5) {
        setSoilResult({ status: 'Warning', message: 'Soil is too acidic. Apply agricultural lime to raise pH.', action: 'Apply 2 tons/ha of lime.' });
      } else if (ph > 7.5) {
        setSoilResult({ status: 'Warning', message: 'Soil is alkaline. Avoid lime, consider sulfur.', action: 'Apply elemental sulfur.' });
      } else {
        setSoilResult({ status: 'Good', message: 'pH is optimal.', action: 'Maintain current practices.' });
      }
    }, 800);
  };

  const formatKes = (amount) => `KES ${amount.toLocaleString()}`;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Diagnostics</h1>
        <p style={{ color: 'var(--text-muted)' }}>Scan crops for pests/diseases or analyze soil health.</p>
      </header>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          className={`btn ${activeTab === 'visual' ? 'btn-primary' : ''}`} 
          style={{ flex: 1, backgroundColor: activeTab !== 'visual' ? 'white' : '', color: activeTab !== 'visual' ? 'var(--text)' : '' }}
          onClick={() => setActiveTab('visual')}
        >
          <Camera size={20} /> Visual Scan
        </button>
        <button 
          className={`btn ${activeTab === 'soil' ? 'btn-primary' : ''}`} 
          style={{ flex: 1, backgroundColor: activeTab !== 'soil' ? 'white' : '', color: activeTab !== 'soil' ? 'var(--text)' : '' }}
          onClick={() => setActiveTab('soil')}
        >
          <TestTube size={20} /> Soil Health
        </button>
      </div>

      {activeTab === 'visual' && (
        <div className="glass-card" style={{ padding: '2rem' }}>
          {step === 1 && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Select Crop Type</label>
                <select 
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '1rem' }}
                  value={cropType} onChange={(e) => setCropType(e.target.value)}
                >
                  <option value="maize">Maize (Corn)</option>
                  <option value="wheat">Wheat</option>
                  <option value="tomato">Tomatoes</option>
                  <option value="potato">Potatoes</option>
                </select>
              </div>

              <div 
                className="upload-area" 
                onClick={() => fileInputRef.current.click()}
                style={{ padding: '2rem', textAlign: 'center', border: '2px dashed var(--primary)', borderRadius: '1rem', cursor: 'pointer', marginBottom: '1rem' }}
              >
                {previewUrl ? (
                  <img src={previewUrl} style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '0.5rem' }} alt="Preview" />
                ) : (
                  <>
                    <UploadCloud size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
                    <h3>Upload Crop Image</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Tap to browse or take a photo</p>
                  </>
                )}
                <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={(e) => {
                  if (e.target.files[0]) handleImageSelect(e.target.files[0]);
                }} />
              </div>
              
              {previewUrl && (
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={startAnalysis}>
                  Analyze Image 🚀
                </button>
              )}
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div className="spinner" style={{ margin: '0 auto 1rem' }}></div>
              <h3>Analyzing {cropType}...</h3>
              <p>Scanning for diseases and pests.</p>
            </div>
          )}

          {step === 3 && results && (
            <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <img src={previewUrl} style={{ width: '100px', height: '100px', borderRadius: '0.5rem', objectFit: 'cover' }} alt="Analyzed" />
                <div>
                  <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{results.issue_name}</h2>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className={`badge badge-${results.severity}`}>{results.issue_type}</span>
                    <span className="badge badge-Monitor">{(results.confidence * 100).toFixed(1)}% Match</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Treatment Plan</h3>
                <ul className="treatment-list">
                  {results.treatment.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>

              <div className="impact-card" style={{ padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--danger)', marginBottom: '1rem' }}>⚠️ Financial Risk</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Estimated Loss</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--danger)' }}>{formatKes(results.financial_loss_kes)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Treatment Cost</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)' }}>{formatKes(results.treatment_cost_kes)}</div>
                  </div>
                </div>
              </div>

              <button className="btn" style={{ width: '100%', background: 'var(--surface-alt)' }} onClick={() => { setStep(1); setPreviewUrl(null); setSelectedImage(null); }}>
                Scan Another Image
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'soil' && (
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Manual Soil Data Input</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Enter data from your soil test kit to receive actionable recommendations.</p>
          
          <form onSubmit={analyzeSoil}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>pH Level</label>
                <input type="number" step="0.1" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} placeholder="e.g. 6.5" value={soilData.ph} onChange={e => setSoilData({...soilData, ph: e.target.value})} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nitrogen (N)</label>
                <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }} placeholder="Low/Med/High" value={soilData.nitrogen} onChange={e => setSoilData({...soilData, nitrogen: e.target.value})} />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Analyze Soil Health</button>
          </form>

          {soilResult && (
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: soilResult.status === 'Good' ? 'var(--success-light)' : 'var(--warning-light)', borderRadius: '1rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: soilResult.status === 'Good' ? 'var(--success)' : 'var(--warning)' }}>
                <AlertCircle size={20} /> {soilResult.status}
              </h3>
              <p style={{ marginBottom: '1rem' }}>{soilResult.message}</p>
              <div style={{ fontWeight: '600' }}>Recommendation:</div>
              <div>{soilResult.action}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Diagnostics;
