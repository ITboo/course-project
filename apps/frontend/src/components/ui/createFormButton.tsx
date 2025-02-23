import { getCreateFormRoute } from '@/app/lib/routes';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from './icon';

const CreateFormButton = () => {
  const {t}=useTranslation();
  return (
    <Link to={getCreateFormRoute()} className='flex gap-2 items-center px-4 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300' >
      <Icon name={'plus'}/>
      <p>{t('add_form')}</p>
    </Link>
  );
};

export default CreateFormButton;
