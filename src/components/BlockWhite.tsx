import { ReactNode } from 'react';

const BlockWhite = ({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) => {
  return (
    <section
      className={`bg-block-color w-[98%] px-6 pt-16 pb-32 lg:px-24 mx-auto relative ${classes}`}
    >
      {children}
    </section>
  );
};

export default BlockWhite;
