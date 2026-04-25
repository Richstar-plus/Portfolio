import './Hamburger.css'

export function Hamburger({isNavOpen, setIsNavOpen, openTheme}) {
  return (
    <div className={`hamburger ${isNavOpen ? 'hamburger-open hamburger' : ''}`}>
      <button className={`${openTheme ? 'hamburger-btn' : 'hamburger-btn-light'}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? '✕' : '☰'}
      </button>
    </div>
  )
}