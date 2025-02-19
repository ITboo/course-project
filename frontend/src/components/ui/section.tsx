import { ReactNode } from 'react';

type SectionProps = {
  children?: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section className="mb-[30px] w-[90%] m-auto">{children}</section>;
};

export default Section;
