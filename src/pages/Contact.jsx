import { useState, useRef } from 'react'
import './Contact.css'


const EMAILJS_SERVICE_ID  = 'service_fyn0jkm'   
const EMAILJS_TEMPLATE_ID = 'template_97v1fna'  
const EMAILJS_PUBLIC_KEY  = 'fP53Ua2GTFGEwPzgC'    

const SOCIAL = [
  { icon: '⌨', label: 'GITHUB',   handle: 'github.com/vaishnavi-shetty1',           href: 'https://github.com/vaishnavi-shetty1',                   color: 'var(--neon-cyan)'  },
  { icon: '◈', label: 'LINKEDIN', handle: 'in/shetty-vaishnavi-suresh',              href: 'https://linkedin.com/in/shetty-vaishnavi-suresh',         color: 'var(--accent)'     },
  { icon: '✉', label: 'EMAIL',    handle: 'shettyvaishnavi871@gmail.com',             href: 'mailto:shettyvaishnavi871@gmail.com',                     color: 'var(--neon-green)' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const formRef = useRef(null)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js')
        .catch(() => window.emailjs)

      if (!window.emailjs) {
        await new Promise((res, rej) => {
          const s = document.createElement('script')
          s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
          s.onload = res; s.onerror = rej
          document.head.appendChild(s)
        })
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          to_email:   'shettyvaishnavi871@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  function reset() {
    setForm({ name:'', email:'', subject:'', message:'' })
    setStatus('idle')
  }

  return (
    <main className="contact page-enter">
      <section className="contact__header">
        <p className="contact__eyebrow">// CONTACT.SH</p>
        <h1 className="contact__title">LET'S BUILD SOMETHING</h1>
        <p className="contact__subtitle">Drop a message — I reply within 24hrs</p>
      </section>

      <div className="contact__body">
        {/* SIDEBAR */}
        <aside className="contact__sidebar">
          <div>
            <p className="contact__info-label">// WHO.AM.I</p>
            <p className="contact__info-text">
              I'm Vaishnavi Shetty — a full-stack developer based in India, open to
              remote and on-site opportunities. I build clean, functional web apps
              across the full stack. Let's create something great together.
            </p>
          </div>

          <div className="availability-block">
            <div>
              <span className="availability-block__dot" />
              <span className="availability-block__status">AVAILABLE NOW</span>
            </div>
            <p className="availability-block__text">
              Open to full-time roles, internships, and freelance projects.
              Response time: &lt;24 hours.
            </p>
          </div>

          <div>
            <p className="contact__info-label">// FIND.ME</p>
            <div className="social-links">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
                  <span className="social-link__icon" style={{ color: s.color }}>{s.icon}</span>
                  <span>
                    <span style={{ color: s.color }}>{s.label}</span>
                    {' '}— {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* FORM */}
        <div className="contact__form-wrap">
          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success__icon">★</div>
              <p className="form-success__title">MESSAGE TRANSMITTED!</p>
              <p className="form-success__text">
                Your message has been sent to shettyvaishnavi871@gmail.com.
                I'll be in touch soon, {form.name || 'friend'}!
              </p>
              <button className="btn-pixel cyan" onClick={reset}>SEND ANOTHER</button>
            </div>
          ) : (
            <>
              <p className="form-title">
                <span className="prompt">$ </span>
                SEND_MESSAGE → shettyvaishnavi871@gmail.com
              </p>

              <form ref={formRef} className="pixel-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">YOUR NAME</label>
                    <input id="name" name="name" className="form-input" placeholder="Player_1"
                      value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">YOUR EMAIL</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="you@domain.com"
                      value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">SUBJECT</label>
                  <input id="subject" name="subject" className="form-input" placeholder="Let's collaborate on..."
                    value={form.subject} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">MESSAGE</label>
                  <textarea id="message" name="message" className="form-textarea"
                    placeholder="Tell me about your project, idea, or just say hi..."
                    value={form.message} onChange={handleChange} required />
                </div>

                {status === 'error' && (
                  <p style={{ fontFamily:'var(--font-pixel)', fontSize:'0.4rem', color:'var(--neon-pink)', letterSpacing:'0.1em' }}>
                    ✗ SEND FAILED — check your EmailJS config or email me directly.
                  </p>
                )}

                <div className="form-submit-row">
                  <button type="submit" className="btn-pixel green" disabled={status === 'sending'}>
                    {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE →'}
                  </button>
                  <span className="form-hint">SENDS TO MY GMAIL</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
