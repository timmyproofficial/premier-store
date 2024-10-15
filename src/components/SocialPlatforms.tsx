import { Link } from 'react-router-dom';
import { socialPlatforms } from '../constants';

const SocialPlatforms = () => {
  return (
    <div className="lg:flex gap-16 items-center">
      {socialPlatforms.map((platform) => (
        <Link key={platform.id} to={platform.link}>
          <img
            className={`w-[${platform.width}]`}
            src={platform.icon}
            alt={platform.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialPlatforms;
