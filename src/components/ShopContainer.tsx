import { ReactNode } from 'react';
import NavHero from './NavHero';

const ShopContainer = ({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) => {
  return (
    <section
      className={`bg-block-color py-12 px-16 rounded-tl-[50px] ${classes}`}
    >
      <NavHero textColor="black" classes="flex justify-end mr-8 mb-20" />
      {children}
    </section>
  );
};

export default ShopContainer;
