import { Link } from 'react-router-dom';
import premierStore from '../assets/premier-store.svg';
import userIcon from '../assets/user.svg';
import cartIcon from '../assets/cart.svg';
import notificationIcon from '../assets/notification.svg';
import SearchBar from './SearchBar';

const NavbarTop = () => {
  return (
    <nav className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-48 px-8 pt-10 pb-8">
      <img
        className="w-[180px] self-center"
        src={premierStore}
        alt="App Logo"
      />

      <SearchBar />

      <div className="lg:flex items-center gap-14 hidden">
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
