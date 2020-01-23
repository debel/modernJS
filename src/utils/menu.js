import React from 'react';
import { NavLink } from 'react-router-dom';

import topics, { courseTitle } from '../topics';

const locationMatches = link =>
  (_, location) => {
    return location.pathname === `${link}`;
  };

const MenuButton = ({ toggle }) => (
  <span
    role="img"
    aria-label="menu"
    className="menu_button"
    onClick={toggle}>
      <img alt="js logo" width="50px" src="/images/js-icon.png" />
      <span className="menu_title">{courseTitle}</span>
  </span>
);

const Menu = () => {
  debugger;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = React.useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const hideMenu = React.useCallback(() => setMenuOpen(false), []);
  const menuRef = React.useRef();
  const menuListRef = React.useRef();
  React.useEffect(() => {
    if (menuOpen) {
      menuListRef.current.scrollTop = menuListRef.current.scrollHeight;
    }
  }, [menuOpen]);
  React.useEffect(() => {
    const hideMenuOnOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.body.addEventListener('click', hideMenuOnOutsideClick);
    return () => { document.body.removeEventListener('click', hideMenuOnOutsideClick); }
  }, []);
  return (
    <aside className="menu" ref={menuRef}>
      <MenuButton toggle={toggleMenu} />
      { menuOpen &&
      <ul className="menu_list" ref={menuListRef}>
      {topics.map(({ link, text, divider }) => (
        divider
        ? <li key={text} className="menu_divider">{text}</li>
        : <li key={link}>
          <NavLink
            to={link}
            isActive={locationMatches(link)}
            onClick={hideMenu}
            activeClassName="menu_active_item">
              {text}
          </NavLink>
        </li>
      ))}
      </ul>}
    </aside>);
}

export default Menu;
