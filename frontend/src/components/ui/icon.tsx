import { createElement } from 'react';
import { CirclePlus,Moon, Sun, GripVertical, X, Eye, RotateCcw, Plus } from 'lucide-react';

const icons = {
  plus: CirclePlus,
  moon: Moon,
  sun: Sun,
  grip: GripVertical,
  add:Plus,
  delete: X,
  watch: Eye,
  reset: RotateCcw
};

export const Icon = ({ name, size, ...restProps }: { name: keyof typeof icons, size?:number }) => {
  return createElement(icons[name], restProps);
};
