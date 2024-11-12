import { X } from 'lucide-react';
import { pages } from '../constants';
import MobileMenuList from './MobileMenuList';

interface Props {
  onSetShowMenu: () => void;
}

const MobileMenuSidebar = ({ onSetShowMenu }: Props) => {
  return (
    <div className="mobile__overlay">
      <div className="text-body-color h-[100vh] flex flex-col items-center gap-24 py-24">
        <div onClick={onSetShowMenu} className="flex items-center gap-6">
          <X className="w-20 h-20" />
          <p className="text-[2.8rem]">Close</p>
        </div>

        <div className="flex flex-col gap-12">
          {pages.map((page) => (
            <MobileMenuList
              key={page.id}
              Icon={page.icon}
              link={page.link}
              text={page.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenuSidebar;
