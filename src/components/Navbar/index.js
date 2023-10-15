import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeChanger = () => {
        toggleTheme()
      }

      return (
        <nav
          className={`navbar-container ${
            isDarkTheme ? 'dark-theme' : 'light-theme'
          }`}
        >
          <div className="nav-container">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
              alt={isDarkTheme ? 'Dark Theme' : 'Light Theme'}
              className="logo"
            />
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
            <button type="button" className="change-mode" onClick={toggleTheme}>
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                }
                alt={isDarkTheme ? 'Light Theme' : 'Dark Theme'}
                className="theme-mode"
                onClick={onClickThemeChanger}
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
