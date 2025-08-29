import React from 'react'

export default function About(){
  return (
    <section>
      <h2>About</h2>
      <p className="muted">I’m a software engineer who builds with both people and purpose in mind. At Firme Coding, I mentor fellows and design trauma-informed digital-literacy curricula. On the technical side, I ship full-stack projects with a focus on clarity, performance, and usability. Before tech, I led a service-dog training program and organized community events—experiences that taught me discipline, collaboration, and impact. Today, I channel that same energy into creating thoughtful code and meaningful digital experiences.</p>
      <h3 style={{marginTop:16}}>Skills</h3>
      <div className="grid" style={{marginTop:8}}>
        {['JavaScript (ES6+)','React + Vite','Node/Express','Supabase/Prisma','PostgreSQL','REST APIs','Git/GitHub','HTML/CSS','Tailwind','SwiftUI (Associate)']
          .map(s => <div key={s} className="card">{s}</div>)}
      </div>
    </section>
  )
}
