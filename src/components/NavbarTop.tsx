import { useState } from 'react';
import { Link } from 'react-router-dom';
import premierStore from '../assets/premier-store.svg';
import userIcon from '../assets/user.svg';
import cartIcon from '../assets/cart.svg';
import notificationIcon from '../assets/notification.svg';
import SearchBar from './SearchBar';
import { Menu } from 'lucide-react';
import MobileMenuSidebar from './MobileMenuSidebar';

const NavbarTop = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSetShowMenu = () => setShowMenu(false);

  return (
    <nav className="flex items-center justify-between gap-40 px-8 pt-10 pb-8">
      <Link to="/">
        <img
          className="w-[180px] self-center"
          src={premierStore}
          alt="App Logo"
        />
      </Link>

      <SearchBar />

      {!showMenu && (
        <Menu className="lg:hidden" onClick={() => setShowMenu(true)} />
      )}

      <div className="lg:flex items-center gap-14 hidden">
        <Link to={'/login'}>
          <img className="nav-icon" src={userIcon} alt="User Icon" />
        </Link>
        <Link to={'/'}>
          <img className="nav-icon" src={cartIcon} alt="Cart Icon" />
        </Link>
        <Link to={'/'}>
          <img
            className="nav-icon"
            src={notificationIcon}
            alt="Notification Icon"
          />
        </Link>
      </div>

      {showMenu && <MobileMenuSidebar onSetShowMenu={handleSetShowMenu} />}
    </nav>
  );
};

export default NavbarTop;
