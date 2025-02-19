import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FormCardProps {
  url: string;
  author:string;
  img?: string;
  title: string;
  children?: ReactNode
}

const FormCard = ({ url, img, title, children, author}: FormCardProps) => {
  return (
    <Link to={url} className='border p-5 w-[200px]'>
      <article>
        {children}
        <img src={img?img:'https://i.pinimg.com/736x/27/be/86/27be8619450fe746f9369e2b29684675.jpg'} alt={title}  width={100}/>
        <h3>{title}</h3>
        <h4>by {author}</h4>
      </article>
    </Link>
  );
};

export default FormCard;
