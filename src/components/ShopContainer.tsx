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
      className={`bg-block-color py-24 lg:py-12 px-8 lg:px-16 rounded-tl-[50px] ${classes}`}
    >
      <NavHero
        textColor="black"
        classes="hidden lg:flex justify-end mr-8 mb-20"
      />
      {children}
    </section>
  );
};

export default ShopContainer;
