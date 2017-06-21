import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './styles.scss';

class Navbar extends Component {
  static intl(id) {
    return `root.components.navbar.${id}`;
  }

  constructor(props) {
    super(props);

    this.state = {
      menuSwitch: null,
    };
  }

  setMenuSwitch(menuSwitch) {
    this.setState({ menuSwitch });
  }

  toggleMenu() {
    this.setMenuSwitch(!this.state.menuSwitch);
  }

  render() {
    return (
      <header className="navbar">
        <div className="navbar__fixed">
          <Link
            className="brand"
            to="/"
          >
            <h1 className="brand__text">Keepmd</h1>
          </Link>
        </div>
        <nav>
          <ul className="navbar-menu">
            <li className="navbar-menu__item">
              <a
                className="menu-button-text"
                href="https://github.com/matheusmariano/keepmd"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id={Navbar.intl('about')} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
