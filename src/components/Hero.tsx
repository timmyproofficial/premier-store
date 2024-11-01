import { Link } from 'react-router-dom';
import Button from './Button';
import heroImg from '../assets/hero-premier.png';
import SocialPlatforms from './SocialPlatforms';
import NavHero from './NavHero';

const Hero = () => {
  return (
    <>
      <div className="relative pb-12 lg:h-[95vh] hero container">
        <NavHero
          textColor="link-color"
          classes="flex justify-end px-10 py-7 mr-10"
        />

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
          <SocialPlatforms />
        </div>
      </div>
    </>
  );
};

export default Hero;
