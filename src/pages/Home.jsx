import { Link } from 'react-router-dom'
import './Home.css'

// ── Pixel art avatar ──────────────────────────────────────
function PixelCharacter() {
  const skin = '#f5c5a3', hair = '#2d1a0e', shirt = '#7c3aed', laptop = '#00f5ff'
  const pixels = [
    {x:6,y:3,c:hair},{x:7,y:3,c:hair},{x:8,y:3,c:hair},{x:9,y:3,c:hair},{x:10,y:3,c:hair},
    {x:5,y:4,c:hair},{x:6,y:4,c:skin},{x:7,y:4,c:skin},{x:8,y:4,c:skin},{x:9,y:4,c:skin},{x:10,y:4,c:skin},{x:11,y:4,c:hair},
    {x:5,y:5,c:skin},{x:6,y:5,c:skin},{x:7,y:5,c:skin},{x:8,y:5,c:skin},{x:9,y:5,c:skin},{x:10,y:5,c:skin},{x:11,y:5,c:skin},
    {x:5,y:6,c:skin},{x:6,y:6,c:skin},{x:7,y:6,c:'#222'},{x:8,y:6,c:skin},{x:9,y:6,c:'#222'},{x:10,y:6,c:skin},{x:11,y:6,c:skin},
    {x:5,y:7,c:skin},{x:8,y:7,c:'#ff9999'},{x:11,y:7,c:skin},
    {x:5,y:8,c:shirt},{x:6,y:8,c:shirt},{x:7,y:8,c:shirt},{x:8,y:8,c:shirt},{x:9,y:8,c:shirt},{x:10,y:8,c:shirt},{x:11,y:8,c:shirt},
    {x:4,y:9,c:shirt},{x:5,y:9,c:shirt},{x:6,y:9,c:shirt},{x:7,y:9,c:shirt},{x:8,y:9,c:shirt},{x:9,y:9,c:shirt},{x:10,y:9,c:shirt},{x:11,y:9,c:shirt},{x:12,y:9,c:shirt},
    {x:4,y:10,c:shirt},{x:5,y:10,c:laptop},{x:6,y:10,c:laptop},{x:7,y:10,c:laptop},{x:8,y:10,c:laptop},{x:9,y:10,c:laptop},{x:10,y:10,c:laptop},{x:11,y:10,c:shirt},{x:12,y:10,c:shirt},
    {x:4,y:11,c:'#555'},{x:5,y:11,c:'#333'},{x:6,y:11,c:'#333'},{x:7,y:11,c:'#333'},{x:8,y:11,c:'#333'},{x:9,y:11,c:'#333'},{x:10,y:11,c:'#333'},{x:11,y:11,c:'#555'},{x:12,y:11,c:'#555'},
    {x:6,y:12,c:'#1a1a2e'},{x:7,y:12,c:'#1a1a2e'},{x:9,y:12,c:'#1a1a2e'},{x:10,y:12,c:'#1a1a2e'},
    {x:6,y:13,c:'#1a1a2e'},{x:7,y:13,c:'#1a1a2e'},{x:9,y:13,c:'#1a1a2e'},{x:10,y:13,c:'#1a1a2e'},
    {x:5,y:14,c:'#111'},{x:6,y:14,c:'#111'},{x:7,y:14,c:'#111'},{x:9,y:14,c:'#111'},{x:10,y:14,c:'#111'},{x:11,y:14,c:'#111'},
  ]
  const SZ = 16
  return (
    <svg viewBox="0 0 256 256" className="avatar-pixel-art" xmlns="http://www.w3.org/2000/svg">
      {pixels.map((p, i) => <rect key={i} x={p.x*SZ} y={p.y*SZ} width={SZ} height={SZ} fill={p.c} />)}
    </svg>
  )
}

function FloatingPixels() {
  const items = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: [8,12,16,24][i%4],
    color: ['#7c3aed','#00f5ff','#ff2d9b','#f5e642','#39ff14'][i%5],
    left: `${(i*13+5)%100}%`,
    duration: `${8+(i*2.3)%12}s`,
    delay: `-${(i*1.7)%10}s`,
  }))
  return (
    <div className="hero__bg-sprite">
      {items.map(px => (
        <div key={px.id} className="hero__floating-pixel" style={{ width:px.size, height:px.size, background:px.color, left:px.left, animationDuration:px.duration, animationDelay:px.delay }} />
      ))}
    </div>
  )
}

const SKILLS = [
  'PYTHON','DJANGO','HTML5','CSS3','JAVASCRIPT','PHP','MYSQL','MONGODB',
  'NUMPY','PANDAS','C','REACT','GIT','REST APIs','POWER BI',
  'PYTHON','DJANGO','HTML5','CSS3','JAVASCRIPT','PHP','MYSQL','MONGODB',
  'NUMPY','PANDAS','C','REACT','GIT','REST APIs',
  'TABLEAU','POWER BI','EXCEL','DATA ANALYSIS',
]

export default function Home() {
  return (
    <main className="home page-enter">
      <section className="hero">
        <FloatingPixels />
        <div className="hero__content">
          <p className="hero__eyebrow"><span>// PLAYER_1 </span>VAISHNAVI.EXE</p>
          <h1 className="hero__name">
            CRAFTING DIGITAL
            <em>EXPERIENCES</em>
            ONE PIXEL AT A TIME
          </h1>
          <p className="hero__tagline">
            Full-Stack Dev &amp;&nbsp;<span className="highlight">Problem Solver</span>
          </p>
          <div className="hero__cta-row">
            <Link to="/projects" className="btn-pixel cyan">VIEW PROJECTS</Link>
            <Link to="/contact"  className="btn-pixel pink">HIRE ME</Link>
          </div>
          <p className="hero__status">AVAILABLE FOR WORK</p>
        </div>
        <div className="hero__avatar-wrap">
          <div className="hero__orbit hero__orbit--1" />
          <div className="hero__orbit hero__orbit--2" />
          <div className="hero__avatar">
            <div className="hero__avatar-frame"><PixelCharacter /></div>
            <span className="hero__char-label">VAISHNAVI ★★★★☆</span>
          </div>
        </div>
      </section>

      <div className="skills-ticker">
        <div className="skills-ticker__track">
          {SKILLS.map((s,i) => (
            <span key={i} className="skills-ticker__item">{s}<span className="dot">◆</span></span>
          ))}
        </div>
      </div>

      <section className="about">
        <div>
          <p className="about__label">// ABOUT.TXT</p>
          <h2 className="about__heading">VAISHNAVI<br/>SHETTY</h2>
          <div className="about__stats">
            <div className="stat-block">
              <span className="stat-block__num">23</span>
              <span className="stat-block__label">REPOS</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__num">4+</span>
              <span className="stat-block__label">LIVE APPS</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__num">8+</span>
              <span className="stat-block__label">TECH STACK</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__num">∞</span>
              <span className="stat-block__label">COFFEE ☕</span>
            </div>
          </div>
        </div>
        <div>
          <p className="about__text">
            Hey! I'm Vaishnavi Shetty — a full-stack developer passionate about building
            functional, clean, and user-friendly web applications. I work across the entire
            stack, from crafting pixel-perfect UIs to writing robust backend logic.
          </p>
          <p className="about__text">
            My toolkit includes Python, Django, JavaScript, PHP, MySQL, MongoDB,
            HTML/CSS, NumPy, and Pandas. I love turning ideas into real, deployed products —
            whether that's a restaurant management system or a real-time weather app.
          </p>
          <p className="about__text">
            Currently open to full-time roles and freelance projects. Let's build something great.
          </p>
          <Link to="/projects" className="btn-pixel" style={{ marginTop: 'var(--s4)' }}>SEE MY WORK →</Link>
        </div>
      </section>
    </main>
  )
}
