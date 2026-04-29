import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, ScanSearch, CalendarDays, MessageSquare, ShoppingCart, Tractor, CircleDollarSign, Users, CheckSquare, Settings } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const navItems = [
    { path: '/', icon: <Home size={24} />, label: 'Dashboard' },
    { path: '/diagnostics', icon: <ScanSearch size={24} />, label: 'Diagnostics' },
    { path: '/planning', icon: <CalendarDays size={24} />, label: 'Planning' },
    { path: '/tasks', icon: <CheckSquare size={24} />, label: 'Tasks' },
    { path: '/market', icon: <ShoppingCart size={24} />, label: 'Market' },
    { path: '/equipment', icon: <Tractor size={24} />, label: 'Equipment' },
    { path: '/finance', icon: <CircleDollarSign size={24} />, label: 'Finance' },
    { path: '/community', icon: <Users size={24} />, label: 'Community' },
    { path: '/assistant', icon: <MessageSquare size={24} />, label: 'Assistant' },
    { path: '/profile', icon: <Settings size={24} />, label: 'Profile' }
  ];

  return (
    <div className="layout-container">
      {/* Sidebar for Desktop */}
      <nav className="sidebar desktop-only">
        <div className="sidebar-header">
          <h2>🌱 FarmGuard</h2>
        </div>
        <div className="sidebar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="bottom-nav mobile-only">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
