import './Navigation.css'
import { navLinks } from '../../data/content'

type NavigationProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Navigation({ theme, onToggleTheme }: NavigationProps) {
  return (
    <header className="page-shell nav-shell">
      <nav className="nav panel">
        <div className="nav__brand">
          <div className="nav__spark" aria-hidden />
          <div>
            <div className="nav__title">miro.dev</div>
            <div className="nav__subtitle">Product design engineer</div>
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
