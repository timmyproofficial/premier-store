import { X } from 'lucide-react';
import { pages } from '../constants';

interface Props {
  onSetShowMenu: () => void;
}

const MobileMenuSidebar = ({ onSetShowMenu }: Props) => {
  return (
    <div className="w-[300px] bg-green-200 p-12 absolute top-0 bottom-0 right-0">
      <div onClick={onSetShowMenu} className="flex items-center gap-6">
        <X />
        <p>Close</p>
      </div>

      <div>
        {pages.map((page) => (
          <div key={page.id}>
            {/* {page.icon} */}
            <p>{page.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenuSidebar;
