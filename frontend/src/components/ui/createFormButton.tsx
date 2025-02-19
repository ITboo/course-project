import { getCreateFormRoute } from '@/app/lib/routes';
import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CreateFormButton = () => {
  const {t}=useTranslation();
  return (
    <Link to={getCreateFormRoute()} className='flex gap-2 w-fit items-center'>
      <CirclePlus size={35} />
      <p>{t('add_form')}</p>
    </Link>
  );
};

export default CreateFormButton;
