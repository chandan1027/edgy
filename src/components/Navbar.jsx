import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const colors = {
  purple: '#7C3AED',
  accent: '#F59E42',
  card: '#23233A',
  white: '#FFFFFF',
  dark: '#18181B',
}

const navbarStyle = {
  background: `linear-gradient(90deg, ${colors.purple} 0%, ${colors.accent} 100%)`,
  color: colors.white,
  padding: '0 24px',
  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
  boxShadow: '0 2px 16px rgba(40,40,56,0.12)',
  borderBottom: `2px solid ${colors.purple}`,
  position: 'sticky',
  top: 0,
  zIndex: 100,
}

const brandStyle = {
  color: colors.white,
  fontWeight: 900,
  fontSize: '1.45rem',
  letterSpacing: '1px',
  textShadow: '0 2px 12px rgba(124,58,237,0.18)',
  textDecoration: 'none',
  marginRight: '32px',
}

const navListStyle = {
  display: 'flex',
  gap: '18px',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  listStyle: 'none',
}

const navLinkStyle = {
  color: colors.white,
  fontWeight: 600,
  fontSize: '1.08rem',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '18px',
  transition: 'background 0.18s, color 0.18s',
  display: 'inline-block',
}

const navLinkActiveStyle = {
  background: colors.card,
  color: colors.accent,
}

const btnStyle = {
  background: colors.accent,
  color: colors.white,
  border: 'none',
  borderRadius: '18px',
  padding: '8px 18px',
  fontSize: '1rem',
  fontWeight: 700,
  boxShadow: '0 2px 12px rgba(245,158,66,0.18)',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
  outline: 'none',
  marginLeft: '8px',
}

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav style={navbarStyle}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        height: '64px',
      }}>
        <Link to="/" style={brandStyle}>Edgy Agency</Link>
        <ul style={navListStyle}>
          <li><Link style={navLinkStyle} to="/">Home</Link></li>
          <li><Link style={navLinkStyle} to="/services">Services</Link></li>
          <li><Link style={navLinkStyle} to="/pricing">Pricing</Link></li>
          <li><Link style={navLinkStyle} to="/blog">Blog</Link></li>
          <li><Link style={navLinkStyle} to="/careers">Careers</Link></li>
          <li><Link style={navLinkStyle} to="/contact">Contact</Link></li>
        </ul>
        <ul style={{ ...navListStyle, gap: '8px' }}>
          {user ? (
            <>
              <li><Link style={navLinkStyle} to="/profile">Profile</Link></li>
              <li>
                <button onClick={logout} style={btnStyle}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li><Link style={navLinkStyle} to="/login">Login</Link></li>
              <li><Link style={navLinkStyle} to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </div>
      <style>
        {`
          @media (max-width: 900px) {
            nav > div {
              flex-direction: column !important;
              height: auto !important;
              gap: 8px !important;
            }
            ul {
              flex-wrap: wrap !important;
              gap: 8px !important;
              justify-content: center !important;
            }
          }
        `}
      </style>
    </nav>
  )
}
