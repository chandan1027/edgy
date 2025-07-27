import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Clients', value: '120+' },
  { label: 'Campaigns', value: '350+' },
  { label: 'Followers Gained', value: '1M+' },
]

const colors = {
  purple: '#7C3AED',
  purpleLight: '#A78BFA',
  dark: '#18181B',
  light: '#F3F4F6',
  card: '#23233A',
  accent: '#F59E42',
  accentDark: '#C76A1A',
  white: '#FFFFFF',
}

const containerStyle = {
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${colors.purpleLight} 0%, ${colors.accent} 100%)`,
  color: colors.dark,
  padding: '48px 0',
  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
}

const headingStyle = {
  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
  fontWeight: 900,
  color: colors.purple,
  marginBottom: '16px',
  letterSpacing: '1px',
  textShadow: '0 2px 16px rgba(245,158,66,0.18)',
}

const leadStyle = {
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  marginBottom: '32px',
  color: colors.dark,
  maxWidth: '500px',
  fontWeight: 500,
  marginLeft: 'auto',
  marginRight: 'auto',
}

const btnStyle = {
  background: colors.accent,
  color: colors.white,
  border: 'none',
  borderRadius: '32px',
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: 700,
  boxShadow: '0 4px 24px rgba(245,158,66,0.18)',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
  outline: 'none',
  marginTop: '8px',
  marginBottom: '8px',
  display: 'inline-block',
}

const statsRowStyle = {
  display: 'flex',
  gap: '32px',
  justifyContent: 'center',
  marginBottom: '48px',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: '900px',
}

const statCardStyle = {
  background: colors.card,
  color: colors.white,
  borderRadius: '24px',
  padding: '32px 24px',
  minWidth: '220px',
  boxShadow: '0 2px 24px rgba(40,40,56,0.22)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.2s',
  flex: '1 1 220px',
  margin: '8px',
}

const statValueStyle = {
  fontSize: '2.5rem',
  fontWeight: 800,
  color: colors.accent,
  marginBottom: '8px',
  textShadow: '0 2px 12px rgba(245,158,66,0.18)',
}

const statLabelStyle = {
  fontSize: '1.1rem',
  color: colors.white,
  opacity: 0.95,
  fontWeight: 500,
  textAlign: 'center',
}

const whyStyle = {
  background: 'rgba(255,255,255,0.08)',
  borderRadius: '18px',
  padding: '32px 24px',
  boxShadow: '0 2px 16px rgba(245,158,66,0.12)',
  maxWidth: '480px',
  marginBottom: '24px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
}

const whyHeadingStyle = {
  fontWeight: 800,
  fontSize: '1.6rem',
  marginBottom: '18px',
  color: colors.accentDark,
  letterSpacing: '0.5px',
  textAlign: 'center',
}

const ulStyle = {
  paddingLeft: '18px',
  fontSize: '1.08rem',
  lineHeight: '2',
  color: colors.dark,
  margin: 0,
  fontWeight: 500,
  listStyle: 'disc inside',
}

const heroAnimation = {
  initial: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
}

const statAnimation = idx => ({
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  whileHover: { scale: 1.06, boxShadow: '0 6px 32px rgba(245,158,66,0.28)' },
  transition: { delay: 0.3 + idx * 0.2, duration: 0.5 },
})

const whyAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 1, duration: 0.7 },
}

const liAnimation = idx => ({
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { delay: 1.1 + idx * 0.1, duration: 0.4 },
})

const whyItems = [
  'Proven Instagram growth strategies',
  'Expert team of marketers & designers',
  'Personalized analytics & reporting',
  'Dedicated support for every client',
]

export default function Home() {
  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        {...heroAnimation}
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          width: '100%',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h1 style={headingStyle}>Welcome to Edgy Agency</h1>
        <p style={leadStyle}>
          We help your Instagram grow with cutting-edge strategies and marketing solutions.
        </p>
        <motion.a
          href="/#/services"
          style={btnStyle}
          whileHover={{
            scale: 1.08,
            background: colors.purple,
            color: colors.white,
          }}
        >
          Explore Our Services
        </motion.a>
      </motion.div>
      <div style={statsRowStyle}>
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            style={statCardStyle}
            {...statAnimation(idx)}
          >
            <h2 style={statValueStyle}>{stat.value}</h2>
            <p style={statLabelStyle}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        {...whyAnimation}
        style={whyStyle}
      >
        <h3 style={whyHeadingStyle}>Why Choose Us?</h3>
        <ul style={ulStyle}>
          {whyItems.map((item, idx) => (
            <motion.li key={item} {...liAnimation(idx)}>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {/* Responsive helper: Add a small style block for mobile */}
      <style>
        {`
          @media (max-width: 700px) {
            div[style*='max-width: 900px'] {
              flex-direction: column !important;
              gap: 16px !important;
              align-items: stretch !important;
            }
            div[style*='min-width: 220px'] {
              min-width: 0 !important;
              width: 100% !important;
              margin: 0 !important;
            }
            div[style*='max-width: 480px'] {
              padding: 18px 8px !important;
            }
          }
        `}
      </style>
    </motion.div>
  )
}