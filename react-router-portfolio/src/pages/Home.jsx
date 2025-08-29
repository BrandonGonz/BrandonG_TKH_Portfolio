import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <p className="pill">Software Engineer</p>
      <h1 style={{fontSize:'clamp(28px, 5vw, 44px)', marginTop: 6, marginBottom: 8}}>
        Hi, I’m Brandon — a software engineer building community-driven solutions.
      </h1>
      <p className="muted">Full-stack JS: React, Vite, Node/Express, Prisma, Supabase, PostgreSQL. Mentor at Firme Coding.</p>
      <div style={{display:'flex', gap:10, marginTop:12}}>
        <a className="btn primary" href="https://github.com/BrandonGonz" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/brandon-gonzalez-3b91492a0/" target="_blank" rel="noreferrer">LinkedIn</a>
        <Link className="btn" to="/projects">See Projects</Link>
      </div>
    </section>
  )
}
