import React from 'react'

const colors = {
  purple: '#7C3AED',
  accent: '#F59E42',
  card: '#23233A',
  white: '#FFFFFF',
  dark: '#18181B',
}

const footerStyle = {
  background: `linear-gradient(90deg, ${colors.purple} 0%, ${colors.accent} 100%)`,
  color: colors.white,
  textAlign: 'center',
  padding: '24px 0',
  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
  fontWeight: 600,
  fontSize: '1.08rem',
  letterSpacing: '0.5px',
  boxShadow: '0 -2px 16px rgba(40,40,56,0.10)',
  marginTop: '48px',
}

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        © {new Date().getFullYear()} Edgy Agency. All Rights Reserved.
      </p>
      <style>
        {`
          @media (max-width: 600px) {
            footer {
              font-size: 0.98rem !important;
              padding: 16px 0 !important;
            }
          }
        `}
      </style>
    </footer>
  )
}
