import React from 'react'
import './App.scss'
import { render } from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
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
