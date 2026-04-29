import React, { useState } from 'react';
import { CheckSquare, Circle, CheckCircle2 } from 'lucide-react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Apply Top Dressing to Maize (Plot A)', time: 'Morning', completed: false, critical: true },
    { id: 2, text: 'Inspect Tomatoes for Late Blight', time: 'Anytime', completed: true, critical: false },
    { id: 3, text: 'Water Cabbage seedlings', time: 'Evening', completed: false, critical: false },
    { id: 4, text: 'Purchase Fungicide from Market', time: 'Afternoon', completed: false, critical: true },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Daily Tasks</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your farm operations and schedule.</p>
      </header>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Today's Progress</h2>
          <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{progress}%</span>
        </div>
        <div style={{ height: '8px', background: 'var(--surface-alt)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'var(--primary)', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {tasks.map(task => (
          <div 
            key={task.id} 
            className="glass-card" 
            style={{ 
              padding: '1rem 1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              opacity: task.completed ? 0.7 : 1,
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onClick={() => toggleTask(task.id)}
          >
            <div style={{ color: task.completed ? 'var(--primary)' : 'var(--text-muted)' }}>
              {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontSize: '1.1rem', 
                fontWeight: '500', 
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'var(--text-muted)' : 'var(--text)'
              }}>
                {task.text}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{task.time}</span>
                {task.critical && <span style={{ fontSize: '0.8rem', color: 'var(--danger)', fontWeight: '600' }}>Priority</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
