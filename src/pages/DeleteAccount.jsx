import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

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

const cardStyle = {
  background: colors.card,
  color: colors.white,
  borderRadius: '24px',
  padding: '32px 24px',
  boxShadow: '0 2px 24px rgba(40,40,56,0.22)',
  maxWidth: '400px',
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
}

const btnStyle = {
  background: colors.accent,
  color: colors.white,
  border: 'none',
  borderRadius: '32px',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 700,
  boxShadow: '0 4px 24px rgba(245,158,66,0.18)',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
  outline: 'none',
  marginTop: '8px',
  marginBottom: '8px',
  display: 'inline-block',
  width: '100%',
}

export default function DeleteAccount() {
  const { deleteAccount } = useAuth()
  const [confirm, setConfirm] = useState(false)
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteAccount()
    setConfirm(false)
    navigate('/')
  }

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
      >
        <h2 style={headingStyle}>Delete Account</h2>
      </motion.div>
      <motion.div
        style={cardStyle}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p style={{ marginBottom: 16 }}>
          Are you sure you want to delete your account? <br />
          <span style={{ color: '#ef4444', fontWeight: 600 }}>
            This action cannot be undone.
          </span>
        </p>
        {!confirm ? (
          <motion.button
            onClick={() => setConfirm(true)}
            style={{ ...btnStyle, background: '#ef4444' }}
            whileHover={{ scale: 1.05, background: colors.purple }}
          >
            Delete Account
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: 16, textAlign: 'center' }}
          >
            <p style={{ marginBottom: 8 }}>Please confirm:</p>
            <motion.button
              onClick={handleDelete}
              style={{
                ...btnStyle,
                background: '#ef4444',
                width: 'auto',
                marginRight: 8,
              }}
              whileHover={{ scale: 1.08, background: colors.purple }}
            >
              Yes, Delete
            </motion.button>
            <motion.button
              onClick={() => setConfirm(false)}
              style={{ ...btnStyle, background: colors.purple, width: 'auto' }}
              whileHover={{ scale: 1.08, background: colors.accent }}
            >
              Cancel
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      <style>
        {`
          @media (max-width: 600px) {
            div[style*='max-width: 400px'] {
              padding: 18px 8px !important;
            }
          }
        `}
      </style>
    </motion.div>
  )
}
