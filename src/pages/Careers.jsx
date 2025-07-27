import React from 'react'
import { motion } from 'framer-motion'

const jobs = [
  {
    title: 'Social Media Manager',
    desc: 'Lead campaigns and grow client accounts.'
  },
  {
    title: 'Graphic Designer',
    desc: 'Create stunning visuals for posts and ads.'
  },
  {
    title: 'Content Strategist',
    desc: 'Plan and execute engaging content calendars.'
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

const jobsRowStyle = {
  display: 'flex',
  gap: '32px',
  justifyContent: 'center',
  marginBottom: '48px',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: '900px',
}

const jobCardStyle = {
  background: colors.card,
  color: colors.white,
  borderRadius: '24px',
  padding: '32px 24px',
  minWidth: '220px',
  boxShadow: '0 2px 24px rgba(40,40,56,0.22)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  transition: 'transform 0.2s',
  flex: '1 1 220px',
  margin: '8px',
  position: 'relative',
  height: '340px', // fixed height for all cards
  maxHeight: '340px', // ensures box stays same
  overflow: 'hidden', // prevents overflow
}

const jobTitleStyle = {
  fontSize: '1.35rem',
  fontWeight: 700,
  color: colors.purple,
  marginBottom: '12px',
  textShadow: '0 2px 12px rgba(124,58,237,0.08)',
}

const jobDescStyle = {
  fontSize: '1.08rem',
  color: colors.white,
  opacity: 0.95,
  fontWeight: 500,
  marginBottom: '16px',
  flex: '1 1 auto', // allow description to grow/shrink
}

const btnStyle = {
  background: colors.accent,
  color: colors.white,
  border: 'none',
  borderRadius: '32px',
  padding: '12px 32px',
  fontSize: '1.05rem',
  fontWeight: 700,
  boxShadow: '0 4px 24px rgba(245,158,66,0.18)',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
  outline: 'none',
  marginTop: '8px',
  marginBottom: '8px',
  display: 'inline-block',
}

const heroAnimation = {
  initial: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
}

const jobAnimation = idx => ({
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  whileHover: { scale: 1.06, boxShadow: '0 6px 32px rgba(124,58,237,0.18)' },
  transition: { delay: 0.3 + idx * 0.2, duration: 0.5 },
})

export default function Careers() {
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
        <h1 style={headingStyle}>Join Our Team</h1>
        <p style={leadStyle}>
          We are hiring passionate marketers, designers, and content creators.<br />
          Grow your career with Edgy Agency!
        </p>
      </motion.div>
      <div style={jobsRowStyle}>
        {jobs.map((job, idx) => (
          <motion.div
            key={job.title}
            style={jobCardStyle}
            {...jobAnimation(idx)}
          >
            <h4 style={jobTitleStyle}>{job.title}</h4>
            <p style={jobDescStyle}>{job.desc}</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                position: 'absolute',
                left: 0,
                bottom: 24,
              }}
            >
              <motion.button
                style={btnStyle}
                whileHover={{ scale: 1.08, background: colors.purple }}
              >
                Apply
              </motion.button>
            </div>
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
            div[style*='height: 340px'] {
              height: 280px !important;
              max-height: 280px !important;
            }
          }
        `}
      </style>
    </motion.div>
  )
}
