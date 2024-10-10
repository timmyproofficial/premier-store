import { Link } from 'react-router-dom';
import premierStore from '../assets/premier-store.svg';
import userIcon from '../assets/user.svg';
import cartIcon from '../assets/cart.svg';
import notificationIcon from '../assets/notification.svg';
import SearchBar from './SearchBar';

const NavbarTop = () => {
  return (
    <nav className="flex justify-between gap-48 pr-12 pl-32 pt-10 pb-8">
      <img className="w-[180px]" src={premierStore} alt="App Logo" />

      <SearchBar />

      <div className="flex items-center gap-14">
        <Link to={'/'}>
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
    </nav>
  );
};

export default NavbarTop;
