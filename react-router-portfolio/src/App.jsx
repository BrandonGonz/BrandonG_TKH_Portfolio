import React from 'react'
import Nav from './components/Nav.jsx'
import { Outlet, useNavigation } from 'react-router-dom'

export default function App(){
  const navigation = useNavigation()
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="brand"><span>👨‍💻</span> <span>Brandon Gonzalez</span></div>
            <Nav />
          </nav>
        </div>
      </header>
      <main className="container">
        {navigation.state !== 'idle' ? <p className="muted">Loading…</p> : null}
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <small>© {new Date().getFullYear()} Brandon Gonzalez — All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}
