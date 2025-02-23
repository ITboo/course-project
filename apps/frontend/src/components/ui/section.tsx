import { ReactNode } from 'react';

type SectionProps = {
  children?: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section className="w-[90%] m-auto p-[20px]">{children}</section>;
};

export default Section;
