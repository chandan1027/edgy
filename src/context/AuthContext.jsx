import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    if (savedUser) setUser(savedUser)
  }, [])

  const signup = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    setUser(data)
  }

  const login = (data) => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    if (savedUser && savedUser.email === data.email && savedUser.password === data.password) {
      setUser(savedUser)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates }
    localStorage.setItem('user', JSON.stringify(updated))
    setUser(updated)
  }

  const changePassword = (newPassword) => {
    const updated = { ...user, password: newPassword }
    localStorage.setItem('user', JSON.stringify(updated))
    setUser(updated)
  }

  const deleteAccount = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, updateProfile, changePassword, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
