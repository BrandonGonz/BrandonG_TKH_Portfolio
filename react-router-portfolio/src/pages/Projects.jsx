import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const items = [
  { slug:'donezo', name:'Donezo — Full-Stack Todo', stack:'React • Supabase • Prisma • PostgreSQL', live:'https://github.com/BrandonGonz/Brandon_G_donezo', repo:'https://github.com/BrandonGonz/Brandon_G_donezo', blurb:'Auth, protected routes, and real-time todos.' },
  { slug:'throne-quotes', name:'Throne Quotes', stack:'HTML • CSS • JS', live:'https://throne-quotes.netlify.app/', repo:'https://github.com/BrandonGonz/quotable-quotes-app', blurb:'Random Game of Thrones quotes.' },
  { slug:'viewfinder', name:'ViewFinder (Capstone)', stack:'React • Node', live:'#', repo:'https://gitlab.com/kyla.williams/view-finder', blurb:'Collaborative media discovery app.' },
  { slug:'studybuddy', name:'StudyBuddy (Hackathon)', stack:'React • Supabase • Tailwind', live:'#', repo:'https://www.youtube.com/watch?v=19N6SDJqfHs', blurb:'Study planner with auth and reminders.' },
]

export default function Projects(){
  return (
    <section>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12}}>
        <h2>Projects</h2>
        <a className="btn" href="https://github.com/brandondgonzalez" target="_blank" rel="noreferrer">More on GitHub →</a>
      </div>

      <div className="grid" style={{marginTop:12}}>
        {items.map(p => (
          <article key={p.slug} className="card">
            <h3 style={{marginBottom:6}}><Link to={p.slug}>{p.name}</Link></h3>
            <p className="muted">{p.blurb}</p>
            <p className="muted" style={{fontSize:12, marginTop:6}}>{p.stack}</p>
            <div style={{display:'flex', gap:8, marginTop:10}}>
              {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>}
              {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
              <Link className="btn primary" to={p.slug}>Details</Link>
            </div>
          </article>
        ))}
      </div>

      {/* nested route renders here */}
      <div style={{marginTop:24}}>
        <Outlet />
      </div>
    </section>
  )
}
