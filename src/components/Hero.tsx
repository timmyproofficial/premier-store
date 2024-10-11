import { Link } from 'react-router-dom';
import Button from './Button';
import heroImg from '../assets/hero-premier.png';
import facebook from '../assets/facebook.svg';
import whatsapp from '../assets/whatsapp.svg';
import instagram from '../assets/instagram.svg';
import NavbarTop from './NavbarTop';
import FeaturedProuductsBlock from './FeaturedProuductsBlock';

const Hero = () => {
  return (
    <>
      <div className="relative pb-12 lg:h-[95vh] hero container">
        <nav className="flex justify-end px-10 py-7 mr-10">
          <ul className="text-[1.8rem] text-link-color font-[700] flex gap-8">
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

        <div className="grid md:grid-cols-[55%_45%]">
          <div className="flex flex-col gap-16 pl-11 mt-[70px]">
            <h1 className="uppercase">The most trendy products for you</h1>
            <Link to={'/'}>
              <Button text="Shop Now" />
            </Link>
          </div>
          <div className="-z-10 hidden md:block">
            <img className="w-full" src={heroImg} alt="Hero Photo" />
          </div>
        </div>

        <div className="hidden lg:flex gap-16 absolute top-[88vh] left-10">
          <img className="w-[15px]" src={facebook} alt="Facebook Icon" />
          <img className="w-[20px]" src={whatsapp} alt="WhatsApp Icon" />
          <img className="w-[20px]" src={instagram} alt="Instagram Icon" />
        </div>
      </div>
    </>
  );
};

export default Hero;
