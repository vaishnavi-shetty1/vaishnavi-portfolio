import { Link } from 'react-router-dom'
import './Home.css'
import { motion } from "framer-motion";

// ── Pixel art avatar ──────────────────────────────────────
function PixelCharacter() {
  const codeBits = [
    { text: "</>", x: 25, y: 60, delay: "0s" },
    { text: "{ }", x: 180, y: 80, delay: "0.8s" },
    { text: "01", x: 40, y: 150, delay: "1.4s" },
    { text: ";", x: 200, y: 160, delay: "2s" },
    { text: "()", x: 120, y: 40, delay: "2.5s" }
  ];

  return (
    <svg
      viewBox="0 0 256 256"
      className="avatar-pixel-art"
      xmlns="http://www.w3.org/2000/svg"
    >

      {/* Floating code animation */}
      {codeBits.map((code, i) => (
        <text
          key={i}
          x={code.x}
          y={code.y}
          fill="#00f5ff"
          fontSize="18"
          fontFamily="monospace"
          style={{
            animation: `floatCode 3s infinite`,
            animationDelay: code.delay
          }}
        >
          {code.text}
        </text>
      ))}


      {/* Pixel Computer Body */}
      <rect x="64" y="60" width="128" height="90" fill="#22223b" />

      {/* Screen border */}
      <rect x="72" y="68" width="112" height="70" fill="#111827" />

      {/* Screen glow */}
      <rect
        x="80"
        y="76"
        width="96"
        height="50"
        fill="#001f3f"
      />

      {/* Code lines on screen */}
      <rect x="90" y="86" width="45" height="5" fill="#00f5ff" />
      <rect x="90" y="98" width="65" height="5" fill="#7c3aed" />
      <rect x="90" y="110" width="35" height="5" fill="#00f5ff" />

      {/* Blinking cursor */}
      <rect
        x="130"
        y="110"
        width="5"
        height="7"
        fill="#fff"
        style={{
          animation: "blink 1s infinite"
        }}
      />


      {/* Monitor stand */}
      <rect x="118" y="150" width="20" height="25" fill="#555" />
      <rect x="95" y="175" width="70" height="8" fill="#777" />


      {/* Keyboard */}
      <rect x="70" y="190" width="116" height="25" fill="#333" />

      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x={80 + i * 12}
          y="198"
          width="8"
          height="8"
          fill="#00f5ff"
        />
      ))}

    </svg>
  );
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
            Frontend Dev &amp;&nbsp;<span className="highlight">Data Analyst</span>
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

      <motion.section className="about" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <motion.div variants={item}>
          <p className="about__label">// ABOUT.TXT</p>
          <h2 className="about__heading">VAISHNAVI<br/>SHETTY</h2>
          <motion.div className="about__stats" variants={container}>
            <motion.div className="stat-block" variants={item} whileHover={{ scale: 1.08, y: -8, rotate: 2, boxShadow: "0 0 25px rgba(0,245,255,.5)",}}>
              <span className="stat-block__num">23</span>
              <span className="stat-block__label">REPOS</span>
            </motion.div>
            <motion.div className="stat-block" variants={item} whileHover={{ scale: 1.08, y: -8, rotate: 2, boxShadow: "0 0 25px rgba(0,245,255,.5)",}}>
              <span className="stat-block__num">4+</span>
              <span className="stat-block__label">LIVE APPS</span>
            </motion.div>
            <motion.div className="stat-block" variants={item} whileHover={{ scale: 1.08, y: -8, rotate: 2, boxShadow: "0 0 25px rgba(0,245,255,.5)",}}>
              <span className="stat-block__num">8+</span>
              <span className="stat-block__label">TECH STACK</span>
            </motion.div>
            <motion.div className="stat-block" variants={item} whileHover={{ scale: 1.08, y: -8, rotate: 2, boxShadow: "0 0 25px rgba(0,245,255,.5)",}}>
              <span className="stat-block__num">∞</span>
              <span className="stat-block__label">COFFEE ☕</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <p className="about__text">
            Hey! I'm Vaishnavi Shetty — a frontend developer passionate about building
            functional, clean, and user-friendly web applications. I work across the entire
            stack, from crafting pixel-perfect UIs to sometimes writing robust backend logic.
          </p>
          <p className="about__text">
            My toolkit includes Python, React, Django, JavaScript, MySQL, MongoDB,
            HTML/CSS, NumPy, and Pandas. I love turning ideas into real, deployed products.
          </p>
          <p className="about__text">
            Currently open to full-time roles and freelance projects. Let's build something great.
          </p>
          <Link to="/projects" className="btn-pixel" style={{ marginTop: 'var(--s4)' }}>SEE MY WORK →</Link>
        </motion.div>
      </motion.section>
    </main>
  )
}
