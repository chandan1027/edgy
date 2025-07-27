import React, { useState } from 'react'
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

const cardStyle = {
  background: colors.card,
  color: colors.white,
  borderRadius: '24px',
  padding: '32px 24px',
  boxShadow: '0 2px 24px rgba(40,40,56,0.22)',
  maxWidth: '400px',
  width: '100%',
  margin: '0 auto',
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    }
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
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={leadStyle}>
          Have questions or want to work with us? Fill out the form below and our team will get back to you soon.
        </p>
      </motion.div>
      <motion.div
        style={cardStyle}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {success && (
          <motion.div
            style={{
              background: '#22c55e',
              color: colors.white,
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '16px',
              textAlign: 'center',
              fontWeight: 600,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            Message sent successfully!
          </motion.div>
        )}
        <form onSubmit={handleSubmit}>
          <motion.input
            type="text"
            style={{
              background: colors.dark,
              color: colors.white,
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              width: '100%',
              fontSize: '1rem',
            }}
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            whileFocus={{ borderColor: colors.purple }}
          />
          <motion.input
            type="email"
            style={{
              background: colors.dark,
              color: colors.white,
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              width: '100%',
              fontSize: '1rem',
            }}
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            whileFocus={{ borderColor: colors.purple }}
          />
          <motion.textarea
            style={{
              background: colors.dark,
              color: colors.white,
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              width: '100%',
              fontSize: '1rem',
              minHeight: '80px',
              resize: 'vertical',
            }}
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            whileFocus={{ borderColor: colors.purple }}
          ></motion.textarea>
          <motion.button
            type="submit"
            style={btnStyle}
            whileHover={{ scale: 1.05, background: colors.purple }}
          >
            Send
          </motion.button>
        </form>
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
