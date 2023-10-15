import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="about-container">
          <img
            className="home-img"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            }
            alt={isDarkTheme ? 'Dark Theme' : 'Light Theme'}
          />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
