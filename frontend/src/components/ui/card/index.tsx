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
    <Link to={url} className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white'>
      <article className='p-5'>
        {children}
        <img src={img?img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb1DVco9CXgTE6wIMvKT9G-cEegoaNP4g1QU9HwO7hfBiKhabKfGxHYNm5LdKMiTxloM&usqp=CAU'} alt={title}  className="w-full h-48 object-cover"/>
        <h3 className='font-bold text-xl mb-2'>{title}</h3>
        <h4 className='text-gray-700 text-base'>by {author}</h4>
      </article>
    </Link>
  );
};

export default FormCard;
