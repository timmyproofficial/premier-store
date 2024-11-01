import { Link } from 'react-router-dom';

interface Props {
  textColor: string;
  classes?: string;
}

const NavHero = ({ textColor, classes }: Props) => {
  return (
    <nav className="">
      <ul
        className={`text-[1.8rem] text-${textColor} font-[700] flex gap-8 ${classes}`}
      >
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/'}>Shop</Link>
        </li>
        <li>
          <Link to={'/'}>Jewerly</Link>
        </li>
        <li>
          <Link to={'/'}>Shirts</Link>
        </li>
        <li>
          <Link to={'/'}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavHero;
