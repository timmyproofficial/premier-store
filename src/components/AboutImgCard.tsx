import aboutImg from '../assets/about-img.png';

const AboutImgCard = () => {
  return (
    <div className="shadow-about-shadow hidden lg:block">
      <img className="w-full" src={aboutImg} alt="About store image" />
    </div>
  );
};

export default AboutImgCard;
