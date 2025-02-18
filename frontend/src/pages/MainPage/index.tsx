import PopularTemplates from '@/widgets/popularTemplates';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import FormsList from '@/widgets/FormsList';

const tags = [
  { id: 1, title: 'Research' },
  { id: 2, title: 'Hobby' },
  { id: 3, title: 'Finance' },
  { id: 4, title: 'Corporate' },
  { id: 5, title: 'Polls' },
  { id: 6, title: 'Sport' },
];

const MainPage = () => {
  return (
    <div className="container m-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Create Beautiful Forms with FormCraft
      </h1>
      <p className="text-xl text-gray-600 text-center mb-4">
        Explore fantastic forms from our community or create your own
      </p>
      <FormsList />      
      <PopularTemplates />
      

      <p className="text-xl text-gray-600 text-center mb-4">
        Can't find? Search your template by field
      </p>
      <div className="flex gap-2 justify-center">
        {tags.map((tag) => (
          <Link to="/" key={tag.id}>
            <Badge variant="outline">{tag.title}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
