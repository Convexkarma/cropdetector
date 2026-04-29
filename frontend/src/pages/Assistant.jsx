import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Bot, User, MicOff } from 'lucide-react';

const Assistant = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Habari! I am your FarmGuard AI Assistant. Ask me anything about crop diseases, weather, or market prices. You can type or use your voice.' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Voice Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US'; // Could add Swahili 'sw-KE' via settings

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  const toggleListen = () => {
    if (isListening) {
      recognition?.stop();
    } else {
      recognition?.start();
      setIsListening(true);
    }
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
      let reply = "I'm currently running in offline mode. For full assistance, please connect to the internet.";
      const query = input.toLowerCase();
      
      if (query.includes('price') || query.includes('market')) {
        reply = "Currently, maize is trading at KES 50/kg in the local market. Tomatoes are at KES 80/kg due to recent shortages.";
      } else if (query.includes('disease') || query.includes('sick')) {
        reply = "If your crops look sick, please use the Diagnostics tab to take a picture of the affected leaf so I can analyze it accurately.";
      } else if (query.includes('fertilizer') || query.includes('soil')) {
        reply = "For planting maize, DAP is recommended at planting. For top dressing, use CAN when the crop is knee-high.";
      }

      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>AI Assistant</h1>
        <p style={{ color: 'var(--text-muted)' }}>Expert farming advice in your local language.</p>
      </header>

      <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem', overflow: 'hidden' }}>
        
        {/* Chat Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              gap: '1rem', 
              alignItems: 'flex-start',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', 
                backgroundColor: msg.role === 'user' ? 'var(--primary-dark)' : 'var(--surface-alt)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: msg.role === 'user' ? 'white' : 'var(--primary)'
              }}>
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div style={{ 
                backgroundColor: msg.role === 'user' ? 'var(--primary)' : 'var(--surface-alt)',
                color: msg.role === 'user' ? 'white' : 'var(--text)',
                padding: '1rem', borderRadius: '1rem', maxWidth: '75%',
                borderTopRightRadius: msg.role === 'user' ? 0 : '1rem',
                borderTopLeftRadius: msg.role === 'bot' ? 0 : '1rem',
              }}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', padding: '0.5rem', borderTop: '1px solid var(--border)' }}>
          <button 
            type="button"
            className="btn"
            style={{ padding: '0.75rem', backgroundColor: isListening ? 'var(--danger-light)' : 'var(--surface-alt)', color: isListening ? 'var(--danger)' : 'var(--text)' }}
            onClick={toggleListen}
            disabled={!SpeechRecognition}
            title={SpeechRecognition ? "Click to speak" : "Voice input not supported in this browser"}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Listening..." : "Type your farming question..."}
            style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}
          />
          
          <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }} disabled={!input.trim()}>
            <Send size={20} />
          </button>
        </form>

      </div>
    </div>
  );
};

export default Assistant;
