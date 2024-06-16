import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const clickLogOutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-image"
          />
        </Link>
        <ul className="unordered-element">
          <Link to="/" className="list-el">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="list-el">
            <li>Jobs</li>
          </Link>
        </ul>
        <button className="logout-button" onClick={clickLogOutButton}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
