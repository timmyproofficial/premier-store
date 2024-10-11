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
      className={`bg-block-color w-[98%] p-6 lg:p-24 mx-auto ${classes}`}
    >
      {children}
    </section>
  );
};

export default BlockWhite;
