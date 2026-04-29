import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, MapPin, Search } from 'lucide-react';

const Community = () => {
  const [posts] = useState([
    { id: 1, author: 'Kiprop J.', location: 'Eldoret', time: '2 hours ago', content: 'Anyone else noticing unusual yellowing on their wheat this week? The rains have been heavy.', likes: 12, comments: 4, tag: 'Disease' },
    { id: 2, author: 'Mama Njeri', location: 'Naivasha', time: '5 hours ago', content: 'Just harvested my first batch of greenhouse tomatoes! The FarmGuard AI really helped me stop that blight early.', likes: 45, comments: 8, tag: 'Success Story' },
    { id: 3, author: 'Ouma P.', location: 'Kisumu', time: '1 day ago', content: 'Where is the best place to buy certified drought-resistant maize seeds around here? The market is out of stock.', likes: 3, comments: 12, tag: 'Market' },
  ]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Community</h1>
        <p style={{ color: 'var(--text-muted)' }}>Connect with local farmers, ask questions, and share experiences.</p>
      </header>

      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <textarea 
          placeholder="What's happening on your farm? Ask the community..." 
          style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', resize: 'none', height: '100px', marginBottom: '1rem', fontFamily: 'inherit' }}
        ></textarea>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-Monitor" style={{ cursor: 'pointer' }}>+ Add Photo</span>
            <span className="badge badge-Low" style={{ cursor: 'pointer' }}>+ Tag Crop</span>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Post</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map(post => (
          <div key={post.id} className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>{post.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={12} /> {post.location} • {post.time}
                  </div>
                </div>
              </div>
              <span className={`badge ${post.tag === 'Disease' ? 'badge-High' : post.tag === 'Success Story' ? 'badge-Low' : 'badge-Medium'}`}>{post.tag}</span>
            </div>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{post.content}</p>
            
            <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} className="hover-primary">
                <ThumbsUp size={18} /> {post.likes} Likes
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} className="hover-primary">
                <MessageSquare size={18} /> {post.comments} Comments
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
