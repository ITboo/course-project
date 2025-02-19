import PopularTemplates from '@/widgets/popularTemplates';
import { Link } from 'react-router-dom';
import FormsList from '@/widgets/FormsList';
import Section from '@/components/ui/section';
import SearchByTag from '@/widgets/searchByTag';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";
const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container m-auto">
      <Section>
      <h1 className="text-4xl font-bold mb-4 text-center">
        {t('title')}
      </h1>
      <p className="text-xl text-gray-600 text-center mb-4">
        {t('description')}
        
      </p>
      </Section>
          <FormsList/>
        <div className="flex justify-center mb-[30px]">
          <Link to={'/forms'}>
            <Button variant={'outline'}>{t('show_all')}</Button>
            </Link>
        </div>

      <PopularTemplates />
      <SearchByTag />
    </div>
  );
};

export default MainPage;
