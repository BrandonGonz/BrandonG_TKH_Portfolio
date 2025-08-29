// src/pages/Contact.jsx
import React, { useState } from 'react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/brandongonz.dev1@gmail.com'

export default function Contact(){
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus({ state: 'loading', message: 'Sending…' })

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
      if (res.ok) {
        form.reset()
        setMessage('')
        setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' })
      } else {
        const err = await res.json().catch(() => ({}))
        setStatus({ state: 'error', message: err?.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please try again.' })
    }
  }

  async function copyEmail(){
    try {
      await navigator.clipboard.writeText('brandongonz.dev1@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {/* no-op */}
  }

  return (
    <section className="contact-grid">
      {/* Modern form card */}
      <article className="card form-card">
        <div className="card-header">
          <h2>Contact</h2>
          <p className="muted">I usually reply within 24–48 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="form" noValidate>
          {/* Honeypot (spam trap) */}
          <input type="text" name="_gotcha" style={{display:'none'}} tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New portfolio message" />
          <input type="hidden" name="_template" value="table" />


          <div className="row-2">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject (optional)</label>
            <input id="subject" name="subject" type="text" placeholder="Quick intro" />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              required
              maxLength={1000}
              placeholder="How can I help?"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <div className="help"><span className="muted">Be as specific as possible.</span><span className="muted">{message.length}/1000</span></div>
          </div>

          <input type="hidden" name="_subject" value="New portfolio message" />
          <input type="hidden" name="_template" value="table" />

          <button className="btn primary block" type="submit" disabled={status.state==='loading'}>
            {status.state==='loading' ? (<><span className="spinner" aria-hidden="true"></span> Sending…</>) : 'Send message'}
          </button>

          <p
            className={`alert ${status.state==='success' ? 'success' : status.state==='error' ? 'error' : ''}`}
            role="status"
            aria-live="polite"
            style={{minHeight: '1.5em', marginTop: 10}}
          >
            {status.message}
          </p>

          <p className="muted" style={{fontSize:12}}>By submitting, you agree to be contacted about your inquiry.</p>
        </form>
      </article>

      {/* Clear contact info */}
      <aside className="card">
        <h3>Other ways to reach me</h3>
        <ul style={{listStyle:'none', padding:0, margin:'12px 0', display:'grid', gap:10}}>
          <li style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            <a className="btn" href="mailto:brandongonz.dev1@gmail.com?subject=Hello%20Brandon">📧 brandongonz.dev1@gmail.com</a>
            <button type="button" className="btn" onClick={copyEmail}>{copied ? 'Copied!' : 'Copy'}</button>
          </li>
          <li><a className="btn" href="https://github.com/BrandonGonz" target="_blank" rel="noreferrer">💻 GitHub</a></li>
          <li><a className="btn" href="https://www.linkedin.com/in/brandon-gonzalez-3b91492a0/" target="_blank" rel="noreferrer">🔗 LinkedIn</a></li>
        </ul>
        <p className="muted" style={{fontSize:12}}>Tip: email is best for opportunities; LinkedIn DMs for quick questions.</p>
      </aside>
    </section>
  )
}
