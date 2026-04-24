import './Hamburger.css'

export function Hamburger({isNavOpen, setIsNavOpen}) {
  return (
    <div className={`hamburger ${isNavOpen ? 'hamburger-open' : ''}`}>
      <button className="hamburger-btn" onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? '✕' : '☰'}
      </button>
    </div>
  )
}