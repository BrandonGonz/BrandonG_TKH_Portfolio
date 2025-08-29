import React from 'react'
import { useParams, Link } from 'react-router-dom'

const data = {
  'donezo': {
    title: 'Donezo — Full-Stack Todo',
    description: 'Protected routes, auth, and real-time todos using React, Supabase, Prisma, and PostgreSQL.',
    stack: ['React','Vite','Supabase','Prisma','PostgreSQL'],
    live: 'https://github.com/BrandonGonz/Brandon_G_donezo',
    repo: 'https://github.com/BrandonGonz/Brandon_G_donezo'
  },
  'throne-quotes': {
    title: 'Throne Quotes',
    description: 'Random Game of Thrones quotes with clean UI and fetch logic.',
    stack: ['HTML','CSS','JavaScript'],
    live: 'https://throne-quotes.netlify.app/',
    repo: ''
  },
  'viewfinder': {
    title: 'ViewFinder (Capstone)',
    description: 'Collaborative media discovery app built with a small team in an agile sprint.',
    stack: ['React','Node'],
    live: '',
    repo: 'https://gitlab.com/kyla.williams/view-finder'
  },
  'studybuddy': {
    title: 'StudyBuddy (Hackathon)',
    description: 'Study planner with auth and simple reminders.',
    stack: ['React','Supabase','Tailwind'],
    live: '',
    repo: 'https://www.youtube.com/watch?v=19N6SDJqfHs'
  }
}

export default function Project(){
  const { slug } = useParams()
  const proj = data[slug]
  if(!proj) return <p className="muted">Project not found.</p>
  return (
    <article className="card">
      <h3>{proj.title}</h3>
      <p className="muted">{proj.description}</p>
      <div style={{display:'flex', gap:8, flexWrap:'wrap', margin:'10px 0'}}>
        {proj.stack.map(s => <span key={s} className="pill">{s}</span>)}
      </div>
      <div style={{display:'flex', gap:8, marginTop:10}}>
        {proj.live && <a className="btn" href={proj.live} target="_blank" rel="noreferrer">Live</a>}
        {proj.repo && <a className="btn" href={proj.repo} target="_blank" rel="noreferrer">Repo</a>}
        <Link className="btn" to="/projects">← Back to Projects</Link>
      </div>
    </article>
  )
}
