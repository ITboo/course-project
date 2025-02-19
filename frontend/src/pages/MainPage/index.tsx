import PopularTemplates from '@/widgets/popularTemplates';
import { Link } from 'react-router-dom';
import FormsList from '@/widgets/FormsList';
import Section from '@/components/ui/section';
import SearchByTag from '@/widgets/searchByTag';
import { Button } from '@/components/ui/button';

const MainPage = () => {
  
  return (
    <div className="container m-auto">
      <Section>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Create Beautiful Forms with FormCraft
      </h1>
      <p className="text-xl text-gray-600 text-center mb-4">
        Explore fantastic forms from our community or create your own
      </p>
      </Section>
          <FormsList/>
        <div className="flex justify-center mb-[30px]">
          <Link to={'/forms'}>
            <Button variant={'outline'}>Show all</Button>
            </Link>
        </div>

      <PopularTemplates />
      <SearchByTag />
    </div>
  );
};

export default MainPage;
