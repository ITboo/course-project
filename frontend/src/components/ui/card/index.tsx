import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FormCardProps {
  className?: string,
  url: string;
  img?: string;
  title: string;
  children?: ReactNode
}

const FormCard = ({ url, img, title, children, className }: FormCardProps) => {
  return (
    <Link to={url} className={className}>
      <article>
        {children}
        {img && <img src={img} alt={title} />}
        <h3>{title}</h3>
      </article>
    </Link>
  );
};

export default FormCard;
