import { useState } from 'react'
import './Projects.css'

function PixelPreview({ palette, pattern }) {
  const W = 32, H = 20, SZ = 8
  const cells = []
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const hash = (x*7 + y*13 + pattern*17) % (palette.length*3)
      const fill = (hash%5 < 2) ? palette[hash%palette.length] : 'transparent'
      if (fill !== 'transparent') cells.push({ x, y, fill })
    }
  }
  return (
    <svg viewBox={`0 0 ${W*SZ} ${H*SZ}`} className="proj-card__preview-art" xmlns="http://www.w3.org/2000/svg" style={{ background:'#0a0a1a' }}>
      {Array.from({length:W},(_,i)=><line key={`v${i}`} x1={i*SZ} y1={0} x2={i*SZ} y2={H*SZ} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
      {Array.from({length:H},(_,i)=><line key={`h${i}`} x1={0} y1={i*SZ} x2={W*SZ} y2={i*SZ} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
      {cells.map((c,i)=><rect key={i} x={c.x*SZ} y={c.y*SZ} width={SZ-1} height={SZ-1} fill={c.fill} opacity={0.85}/>)}
    </svg>
  )
}

const TAG_COLORS = {
  PHP:'react', HTML:'design', CSS:'design', JavaScript:'node',
  Python:'python', MySQL:'python', MongoDB:'python', Django:'python',
  'REST API':'node', 'Vanilla JS':'node', 'Node.js':'node', 'Express':'node', 'React':'react', 'Streamlit':'python',
  'Power BI':'data', 'DAX Query':'data', 'Data Cleaning':'data', 'Data Visualization':'data', 'OpenCV':'python', 'Machine Learning':'python', 'Tailwind CSS':'design'
}
function tagClass(t) { return TAG_COLORS[t] || 'default' }

const PROJECTS = [
  {
    id: 1,
    name: 'QUICKSHOW',
    desc: 'Full-stack movie ticket booking app with live TMDB data, Clerk authentication, seat selection, and an event-driven Node.js/MongoDB backend powered by Inngest.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API','TAILWIND CSS','JAVASCRIPT'],
    year: '2026',
    category: 'fullstack',
    featured: true,
    liveUrl: '',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/quickshow',
    palette: ['#7c3aed','#c026d3','#1a1a35','#2a2a5a'],
    pattern: 1,
  },
  {
    id: 2,
    name: 'ROAD ACCIDENT ANALYSIS',
    desc: 'An interactive Power BI dashboard that analyzes road accident data to uncover trends, visualize key metrics, and provide actionable insights for improving road safety.',
    tags: ['Power BI','DAX Query','Data Cleaning','Data Visualization'],
    year: '2026',
    category: 'data analytics',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/road-accident-analysis-dashboard',
    palette: ['#f5a623','#0a0a1a','#1a1200','#3a2a00'],
    pattern: 2,
  },
  {
    id: 3,
    name: 'BLINKIT SALES DASHBOARD',
    desc: 'Blinkit Sales Dashboard is a Power BI project that visualizes sales, outlet performance, customer ratings, and product trends using interactive dashboards and KPI-driven analytics.',
    tags: ['Power BI','DAX Query','Data Cleaning','Data Visualization'],
    year: '2026',
    category: 'data analytics',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/blinkit-sales-dashboard',
    palette: ['#ff2d9b','#7c3aed','#1a0a1a','#3a0a2a'],
    pattern: 3,
  },
  {
    id: 4,
    name: 'EXPENSE TRACKER',
    desc: 'Expense Tracker is a full-stack web application for tracking income and expenses with secure authentication, real-time balance updates, expense categorization, and CRUD functionality through a clean, responsive interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    category: 'web',
    featured: true,
    liveUrl: '',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/expense-tracker',
    palette: ['#00f5ff','#0a0a1a','#1a1a35','#0f4c5c'],
    pattern: 4,
  },
  {
    id: 5,
    name: 'MOVIE RECOMMENDATION SYSTEM',
    desc: 'Movie Recommendation System is an ML-powered application that provides personalized movie recommendations using content-based filtering, similarity algorithms, and an interactive user interface.',
    tags: ['Python','Streamlit','Machine Learning'],
    year: '2026',
    category: 'web',
    featured: true,
    liveUrl: '',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/movie-recommendation-system',
    palette: ['#ff2d9b', '#7c3aed', '#1a0a1a', '#3a0a2a'],
    pattern: 5,
  },
  {
    id: 6,
    name: 'DIGITAL SATHI AI',
    desc: 'Digital Sathi AI is an AI-powered financial assistant that helps users manage expenses, track spending, receive personalized financial insights, and improve budgeting through an intuitive, responsive interface.',
    tags: ['React', 'PostgreSQL', 'Tailwind CSS', 'FastAPI', 'JWT', 'Git'],
    year: '2026',
    category: 'fullstack',
    featured: true,
    liveUrl: 'https://digital-sathi-ai.lovable.app',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/digital-sathi-ai',
    palette: ['#7c3aed','#c026d3','#1a1a35','#2a2a5a'],
    pattern: 1,
  },
  {
    id: 7,
    name: 'MOUSE CONTROL USING HAND GESTURE',
    desc: 'A Python application that allows users to control the mouse cursor using hand gestures captured by a webcam, utilizing OpenCV for image processing and gesture recognition.',
    tags: ['Python','OpenCV'],
    year: '2026',
    category: 'python/ml',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/mouse-control-using-hands',
    palette: ['#f5a623','#0a0a1a','#1a1200','#3a2a00'],
    pattern: 2,
  },
  {
    id: 8,
    name: 'VOLUME CONTROL USING HAND GESTURE',
    desc: 'A Python application that allows users to control the volume using hand gestures captured by a webcam, utilizing OpenCV for image processing and gesture recognition.',
    tags: ['Python','OpenCV'],
    year: '2026',
    category: 'python/ml',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/volume-control-using-hand',
    palette: ['#ff2d9b','#7c3aed','#1a0a1a','#3a0a2a'],
    pattern: 3,
  },
  {
    id: 9,
    name: 'MULTIPLE DISEASE PREDICTION SYSTEM',
    desc: 'A machine learning-based system for predicting multiple diseases using patient data and medical imaging, providing early diagnosis and treatment recommendations.',
    tags: ['Python','Machine Learning'],
    year: '2025',
    category: 'fullstack',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/Multiple-Disease-prediction-using-Machine-Learning-and-OCR-model-',
    palette: ['#00f5ff','#0a0a1a','#1a1a35','#0f4c5c'],
    pattern: 4,
  },
  {
    id: 10,
    name: 'TEXT EDITOR',
    desc: 'A simple yet efficient text editor built with Python, featuring syntax highlighting, line numbers, and a clean, user-friendly interface.',
    tags: ['Python'],
    year: '2025',
    category: 'python/ml',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/text-editor',
    palette: ['#7c3aed','#c026d3','#1a1a35','#2a2a5a'],
    pattern: 5,
  },
  {
    id: 11,
    name: 'TO DO LIST',
    desc: 'A simple and intuitive to-do list application built with Python, allowing users to create, update, and manage their daily tasks with a clean and user-friendly interface.',
    tags: ['Python'],
    year: '2025',
    category: 'python/ml',
    featured: true,
    liveUrl: 'https://to-do-list-one-ivory-27.vercel.app/',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/to-do-list',
    palette: ['#7c3aed','#c026d3','#1a1a35','#2a2a5a'],
    pattern: 1,
  },
  {
    id: 12,
    name: 'RESTAURANT MANAGEMENT SYSTEM',
    desc: 'A full-featured PHP web app for restaurant operations — user registration, login/logout, order submission, and an admin panel for managing the business.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    year: '2025',
    category: 'fullstack',
    featured: true,
    liveUrl: 'https://restaurant-management-system-nu-five.vercel.app',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/Restaurant_Management_system',
    palette: ['#f5a623','#0a0a1a','#1a1200','#3a2a00'],
    pattern: 2,
  },
  {
    id: 13,
    name: 'AMAZON CLONE',
    desc: 'A pixel-perfect static clone of the Amazon homepage, replicating the hero banner, product grid, navigation bar, and footer using pure HTML and CSS.',
    tags: ['HTML', 'CSS'],
    year: '2025',
    category: 'web',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/Amazon_clone',
    palette: ['#ff2d9b','#7c3aed','#1a0a1a','#3a0a2a'],
    pattern: 3,
  },
  {
    id: 14,
    name: 'ROCK PAPER SCISSORS GAME',
    desc: 'A fully interactive browser-based Rock Paper Scissors game with score tracking, randomised computer moves, and smooth UI transitions built with vanilla JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    year: '2025',
    category: 'web',
    featured: true,
    liveUrl: 'https://rock-paper-scissors-game-eta-beryl.vercel.app',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/Rock-paper-scissors-game',
    palette: ['#00f5ff','#0a0a1a','#1a1a35','#0f4c5c'],
    pattern: 4,
  },
  {
    id: 15,
    name: 'WEATHER APP',
    desc: 'A real-time weather application that fetches live data from a weather API by city name, displaying temperature, humidity, wind speed, and weather conditions.',
    tags: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    year: '2025',
    category: 'web',
    featured: true,
    liveUrl: 'https://weather-app-one-rho-51.vercel.app',
    sourceUrl: 'https://github.com/vaishnavi-shetty1/weather_app',
    palette: ['#00f5ff','#0a0a1a','#1a1a35','#0f4c5c'],
    pattern: 5,
  },
  {
    id: 16,
    name: 'WORD GUESSING GAME',
    desc: 'A simple word guessing game where players try to guess a randomly generated word within a certain number of attempts.',
    tags: ['Python'],
    year: '2024',
    category: 'python/ml',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/weather_app',
    palette: ['#7c3aed','#c026d3','#1a1a35','#2a2a5a'],
    pattern: 1,
  },
  {
    id: 17,
    name: 'NUMBER GUESSING GAME',
    desc: 'A simple number guessing game where players try to guess a randomly generated number within a certain range.',
    tags: ['Python'],
    year: '2024',
    category: 'python/ml',
    liveUrl: null,
    sourceUrl: 'https://github.com/vaishnavi-shetty1/number-guessing-game',
    palette: ['#f5a623','#0a0a1a','#1a1200','#3a2a00'],
    pattern: 2,
  },
]

const FILTERS = ['ALL', 'WEB', 'FULLSTACK','DATA ANALYTICS','PYTHON/ML']

export default function Projects() {
  const [active, setActive] = useState('ALL')
  const filtered = active === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.category.toUpperCase() === active)

  return (
    <main className="projects page-enter">
      <section className="projects__header">
        <p className="projects__eyebrow">// PORTFOLIO.JSON</p>
        <h1 className="projects__title">SELECTED WORK</h1>
        <p className="projects__subtitle">{filtered.length} project{filtered.length !== 1 ? 's' : ''} loaded · <a href="https://github.com/vaishnavi-shetty1" target="_blank" rel="noreferrer" style={{color:'var(--neon-cyan)'}}>github.com/vaishnavi-shetty1 ↗</a></p>
      </section>

      <div className="filter-bar">
        <span className="filter-bar__label">FILTER:</span>
        {FILTERS.map(f => (
          <button key={f} className={`filter-btn ${active===f?'active':''}`} onClick={()=>setActive(f)}>{f}</button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map(proj => (
          <article key={proj.id} className="proj-card">
            {proj.featured && <span className="proj-card__badge">★ FEATURED</span>}
            <div className="proj-card__preview">
              <PixelPreview palette={proj.palette} pattern={proj.pattern} />
              <div className="proj-card__overlay">
                {proj.liveUrl && (
                  <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn-pixel cyan" style={{fontSize:'0.4rem'}}>LIVE DEMO ↗</a>
                )}
                <a href={proj.sourceUrl} target="_blank" rel="noreferrer" className="btn-pixel" style={{fontSize:'0.4rem'}}>SOURCE ↗</a>
              </div>
            </div>
            <div className="proj-card__body">
              <div className="proj-card__tags">
                {proj.tags.map(t => <span key={t} className={`tag-pill ${tagClass(t)}`}>{t}</span>)}
              </div>
              <h3 className="proj-card__name">{proj.name}</h3>
              <p className="proj-card__desc">{proj.desc}</p>
              <div className="proj-card__footer">
                <span className="proj-card__year">{proj.year}</span>
                <div style={{display:'flex',gap:'var(--s2)'}}>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn-pixel cyan" style={{fontSize:'0.38rem',padding:'2px 8px'}}>LIVE ↗</a>
                  )}
                  <a href={proj.sourceUrl} target="_blank" rel="noreferrer" className="btn-pixel" style={{fontSize:'0.38rem',padding:'2px 8px'}}>CODE ↗</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
