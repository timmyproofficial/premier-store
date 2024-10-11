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
      className={`bg-block-color w-[98%] p-6 lg:px-24 lg:py-60 mx-auto mt-0 relative top-[-15px] ${classes}`}
    >
      {children}
    </section>
  );
};

export default BlockWhite;
