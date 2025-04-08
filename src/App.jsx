"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CustomCursor from "./components/custom-cursor"
import Navbar from "./components/navbar"
import Loading from "./components/loading"
import InteractiveShapes from "./components/interactive-shapes"
import HomePage from "./pages/HomePage"
import "./App.css"

function App() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <CustomCursor />
        <Navbar />
        <InteractiveShapes />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

