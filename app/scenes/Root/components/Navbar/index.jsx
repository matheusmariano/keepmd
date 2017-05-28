import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Navbar extends Component {
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
          <button
            className="navbar__toggle-button hidden-md-up"
            onClick={() => this.toggleMenu()}
            type="button"
          >
            <i className="fa fa-bars" />
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
