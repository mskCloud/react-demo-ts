import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.scss'
import routes from './router'

function RederRouter() {
  return useRoutes(routes)
}

function App() {
  return (
    <BrowserRouter>
      <RederRouter></RederRouter>
    </BrowserRouter>
  )
}

export default App
