import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Diagnostics from './pages/Diagnostics';
import Planning from './pages/Planning';
import Tasks from './pages/Tasks';
import Market from './pages/Market';
import Equipment from './pages/Equipment';
import Finance from './pages/Finance';
import Community from './pages/Community';
import Assistant from './pages/Assistant';
import Profile from './pages/Profile';
import './index.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="diagnostics" element={<Diagnostics />} />
          <Route path="planning" element={<Planning />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="market" element={<Market />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="finance" element={<Finance />} />
          <Route path="community" element={<Community />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
