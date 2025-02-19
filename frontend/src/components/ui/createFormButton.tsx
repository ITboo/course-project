import { getCreateFormRoute } from '@/app/lib/routes';
import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreateFormButton = () => {
  return (
    <Link to={getCreateFormRoute()} className='flex gap-2 w-fit items-center'>
      <CirclePlus size={35} />
      <p>Add form</p>
    </Link>
  );
};

export default CreateFormButton;
