import './Navigation.css'
import { navLinks } from '../../data/content'

type NavigationProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}
const home =() => {
  window.location.href = '#top';
}

function Navigation({ theme, onToggleTheme }: NavigationProps) {
  return (
    <header className="page-shell nav-shell">
      <nav className="nav panel">
        <div className="nav__brand">
          <div className="nav__spark" aria-hidden onClick={home}/>
          <div>
            <div className="nav__title">Miroslav Peshev</div>
            <div className="nav__subtitle">Web Developer</div>
          </div>
        </div>

        <div className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <button
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
            className="btn btn-icon nav__toggle"
            onClick={onToggleTheme}
            type="button"
          >
            <span className="nav__toggle-icon" />
          </button>
          <a className="btn nav__cta" href="#contact">
            Book a call
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
