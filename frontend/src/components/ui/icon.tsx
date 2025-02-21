import { createElement } from 'react';
import { CirclePlus,Moon, Sun } from 'lucide-react';

const icons = {
  plus: CirclePlus,
  moon: Moon,
  sun: Sun
};

export const Icon = ({ name, ...restProps }: { name: keyof typeof icons }) => {
  return createElement(icons[name], restProps);
};
