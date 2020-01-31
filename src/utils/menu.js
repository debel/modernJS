import React from 'react';
import { NavLink } from 'react-router-dom';

import topics, { courseTitle, defaultOpenedSection } from '../topics';

const locationMatches = link =>
  (_, location) => {
    return location.pathname === `${link}`;
  };

const MenuContext = React.createContext(() => () => {});

const MenuButton = React.forwardRef(({ toggle }, ref) => (
  <span
    ref={ref}
    role="img"
    aria-label="menu"
    className="menu_button"
    onClick={toggle}>
      <img alt="js logo" width="50px" src="/images/js-icon.png" />
      <span className="menu_title">{courseTitle}</span>
  </span>
));

const MenuItem = ({ link, text }) => {
  const hideMenu = React.useContext(MenuContext);

  return (
    <li key={link}>
      <NavLink
        to={link}
        isActive={locationMatches(link)}
        onClick={hideMenu}
        activeClassName="menu_active_item">
          {text}
      </NavLink>
    </li>
  );
};

const MenuSection = ({ title, items, isOpen, toggle }) => {
  return (
    <React.Fragment>
      <li key={title} className={`menu_divider ${isOpen && 'menu_divider_selected'}`} onClick={toggle}>{title}</li>
      <div className="menu_section">
        {isOpen && items.map(item => <MenuItem key={item.link} {...item} />)}
      </div>
    </React.Fragment>
  );
};

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openedSection, setOpenedSection] = React.useState(defaultOpenedSection || topics.length - 1);
  const toggleMenu = React.useCallback(() => setMenuOpen(o => !o), []);
  const hideMenu = React.useCallback(() => setMenuOpen(false), []);
  const menuRef = React.useRef();
  const menuListRef = React.useRef();
  const menuButtonRef = React.useRef();

  React.useEffect(() => {
    if (menuOpen) {
      menuListRef.current.scrollTop = menuListRef.current.scrollHeight;
    }
  }, [menuOpen]);

  React.useEffect(() => {
    const hideMenuOnOutsideClick = (event) => {
      const menuButtonClicked = menuButtonRef && menuButtonRef.current && menuButtonRef.current.contains(event.target);
      const clickInsideMenuList = menuListRef.current && menuListRef.current.contains(event.target);
      if (!menuButtonClicked && !clickInsideMenuList) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener('click', hideMenuOnOutsideClick);
    return () => { document.body.removeEventListener('click', hideMenuOnOutsideClick); }
  }, []);

  const toggleSection = (sectionIndex) => (
    () => setOpenedSection(oldOpenSection => (
      oldOpenSection !== sectionIndex
        ? sectionIndex
        : -1
      )
    )
  );

  return (
    <MenuContext.Provider value={hideMenu}>
      <aside className="menu" ref={menuRef}>
        <MenuButton toggle={toggleMenu} ref={menuButtonRef} />
        { menuOpen &&
        <ul className="menu_list" ref={menuListRef}>
          {topics.map((section, index) => (
            <MenuSection key={section.title} {...section} isOpen={index === openedSection} toggle={toggleSection(index)} />
          ))}
        </ul>}
      </aside>
    </MenuContext.Provider>);
}

export default Menu;
