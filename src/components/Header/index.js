import './index.css'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {withRouter, Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <button type="button" className="trigger-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </button>
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="30" />
            </button>
            <ul className="nav-links-list">
              <li className="icon-container">
                <AiFillHome size="38" />
                <Link to="/" className="pop-up-item" onClick={() => close()}>
                  <p className="pop-up-item">Home</p>
                </Link>
              </li>
              <li className="icon-container">
                <BsInfoCircleFill size="38" />
                <Link
                  to="/about"
                  className="pop-up-item"
                  onClick={() => close()}
                >
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)
export default withRouter(Header)
