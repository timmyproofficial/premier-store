import { Link } from 'react-router-dom';

interface Props {
  Icon: any;
  link: string;
  text: string;
}
const MobileMenuList = ({ Icon, link, text }: Props) => {
  return (
    <Link className="flex items-center gap-8" to={link}>
      {Icon && <Icon />}
      <div className="text-[2.4rem]">{text}</div>
    </Link>
  );
};

export default MobileMenuList;
