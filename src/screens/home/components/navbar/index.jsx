import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import applyClasses from 'classnames';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <FormattedMessage id="home.navigation.name">
      {navigationName => (
        <nav
          aria-label={navigationName}
          className="navbar is-primary"
        >
          <div className="navbar-brand">
            <div className="navbar-item">
              Keepmd
            </div>
            <FormattedMessage id="home.navigation.menu">
              {menu => (
                <button
                  aria-label={menu}
                  aria-expanded={expanded}
                  className="button is-primary navbar-burger burger"
                  onClick={toggle}
                  type="button"
                >
                  <span aria-hidden />
                  <span aria-hidden />
                  <span aria-hidden />
                </button>
              )}
            </FormattedMessage>
          </div>
          <div
            className={
              applyClasses('navbar-menu', {
                'is-active': expanded,
              })
            }
          >
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/matheusmariano/keepmd"
                target="__blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      )}
    </FormattedMessage>
  );
};

export default Navbar;
