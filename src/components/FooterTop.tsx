import premierStoreImg from '../assets/premier-store-white.png';
import { contactPage, infoPages, pages } from '../constants';
import SocialPlatforms from './SocialPlatforms';
import FooterNav from './FooterNav';

const FooterTop = () => {
  return (
    <div className="text-white-color grid grid-rows[auto_1fr] md:grid-rows[1fr] grid-cols-[1fr_1fr_1fr] md:grid-cols-[auto_1fr_1fr_1fr]">
      <div className="flex flex-col justify-between">
        <img className="w-[150px]" src={premierStoreImg} alt="Premier Store" />
        <h4>It's all about fashion & lifestyle</h4>
        <SocialPlatforms />
      </div>

      <div className="justify-self-center">
        <FooterNav heading="Pages" pages={pages} />
      </div>

      <div>
        <FooterNav heading="Info" pages={infoPages} />
      </div>

      <div className="col-span-4 md:col-span-1">
        <FooterNav
          heading="Contact"
          pages={contactPage}
          extras="0811 218 1414"
        />
      </div>
    </div>
  );
};

export default FooterTop;
