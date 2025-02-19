import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { Button } from './button';
import { useState } from 'react';



const LangSwitcher = () => {
  const [language, setLanguage] = useState('ru');

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru';
    i18next.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };
  return (
    <Button onClick={toggleLanguage} size={'sm'} variant={'theme'}>
      {i18n.resolvedLanguage?.toLocaleUpperCase()}
    </Button>
  );
};

export default LangSwitcher;
