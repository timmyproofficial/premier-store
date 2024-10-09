import aboutImg from '../assets/about-img.png';

const AboutCard = () => {
  return (
    <div className="shadow-about-shadow max-w-[754px]">
      <img className="w-full" src={aboutImg} alt="About store image" />
    </div>
  );
};

export default AboutCard;
