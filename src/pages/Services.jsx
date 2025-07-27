import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Instagram Growth Strategy',
    desc: 'Custom plans to boost your followers and engagement.',
    icon: '📈'
  },
  {
    title: 'Content Planning & Design',
    desc: 'Creative posts, stories, and reels tailored for your brand.',
    icon: '🎨'
  },
  {
    title: 'Influencer Marketing',
    desc: 'Connect with top influencers to expand your reach.',
    icon: '🤝'
  },
  {
    title: 'Social Media Analytics',
    desc: 'Detailed reports to track your progress and ROI.',
    icon: '📊'
  }
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
  textAlign: 'center',
}

const leadStyle = {
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  marginBottom: '32px',
  color: colors.dark,
  maxWidth: '500px',
  fontWeight: 500,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
}

const servicesRowStyle = {
  display: 'flex',
  gap: '32px',
  justifyContent: 'center',
  marginBottom: '48px',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: '900px',
}

const serviceCardStyle = {
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

const iconStyle = {
  fontSize: '2.5rem',
  marginBottom: '12px',
}

const serviceTitleStyle = {
  fontSize: '1.35rem',
  fontWeight: 700,
  color: colors.purple,
  marginBottom: '12px',
  textShadow: '0 2px 12px rgba(124,58,237,0.08)',
  textAlign: 'center',
}

const serviceDescStyle = {
  fontSize: '1.08rem',
  color: colors.white,
  opacity: 0.95,
  fontWeight: 500,
  marginBottom: 0,
  textAlign: 'center',
}

const heroAnimation = {
  initial: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
}

const serviceAnimation = idx => ({
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  whileHover: { scale: 1.06, boxShadow: '0 6px 32px rgba(124,58,237,0.18)' },
  transition: { delay: 0.3 + idx * 0.2, duration: 0.5 },
})

export default function Services() {
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
        <h1 style={headingStyle}>Our Services</h1>
        <p style={leadStyle}>
          Discover our full suite of Instagram marketing services designed to help you grow and engage your audience.
        </p>
      </motion.div>
      <div style={servicesRowStyle}>
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            style={serviceCardStyle}
            {...serviceAnimation(idx)}
          >
            <div style={iconStyle}>{s.icon}</div>
            <h4 style={serviceTitleStyle}>{s.title}</h4>
            <p style={serviceDescStyle}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
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
          }
        `}
      </style>
    </motion.div>
  )
}
