import { Link } from 'react-router-dom'
import './PixelLogo.css'

const PIXEL_SIZE = 5
const V_PIXELS = [
  [0,0],[4,0],
  [0,1],[4,1],
  [1,2],[3,2],
  [1,3],[3,3],
  [2,4],
]
const S_PIXELS = [
  [7,0],[8,0],[9,0],
  [6,1],
  [7,2],[8,2],
  [9,3],
  [6,4],[7,4],[8,4],
]

export default function PixelLogo({ size = 1 }) {
  const s = PIXEL_SIZE * size
  return (
    <Link to="/" className="pixel-logo-wrap">
      <div className="pixel-logo-mark">
        <svg viewBox="0 0 55 30" xmlns="http://www.w3.org/2000/svg">
          {V_PIXELS.map(([x, y], i) => (
            <rect key={`v${i}`} x={x*s} y={y*s} width={s-1} height={s-1} fill="#7c3aed" />
          ))}
          {S_PIXELS.map(([x, y], i) => (
            <rect key={`s${i}`} x={x*s} y={y*s} width={s-1} height={s-1} fill="#00f5ff" />
          ))}
        </svg>
      </div>
      <div className="pixel-logo-text">
        <div className="name">VAISHNAVI</div>
        <div className="tag">SHETTY</div>
      </div>
    </Link>
  )
}
