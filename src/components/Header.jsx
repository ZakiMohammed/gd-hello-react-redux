import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const filtered = useSelector(state => state.product.filtered);
  const [isActive, setIsActive] = useState(false);

  const activeNavLink = ({ isActive }) => 'navbar-item ' + (isActive ? 'has-text-primary' : '');

  return (
    <>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to={'/'}>
            <b className="has-text-primary">👋 HelloRedux</b>
          </NavLink>

          <button
            className={'navbar-burger burger ' + (isActive ? 'is-active' : '')}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsActive(!isActive)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={'navbar-menu ' + (isActive ? 'is-active' : '')}>
          <div className="navbar-end">
            <div className='navbar-item'>
              <strong className='has-text-grey'>
                🧸 Products: 
                <span className="tag is-primary is-light has-float-right">Filtered: {filtered?.length || 0}</span>
              </strong>
            </div>
            <NavLink className={activeNavLink} to={'/'}>
              🏠 Home
            </NavLink>
            <NavLink className={activeNavLink} to={'/about'}>
              💖 About
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
