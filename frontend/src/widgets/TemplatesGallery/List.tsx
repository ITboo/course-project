import { Link } from 'react-router-dom';
import { trpc } from '../../lib/trpc';
import { getTemplateRoute } from '../../lib/routes';
import { CirclePlus } from 'lucide-react';
import Loader from '@/components/ui/loader';

const List = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getTemplates.useQuery();
  if (isLoading || isFetching) {
    return <Loader/>;
  }

  if (isError) {
    return <div className='text-center'>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div className="flex flex-wrap gap-[10px] justify-center">
      <Link to="/" className="w-[250px] flex justify-center items-center">
        <div className="">
          <CirclePlus size={75} />
          <p className='mt-5'>Blank Form</p>
        </div>
      </Link>
      {data.templates.map((template) => (
        <Link to={getTemplateRoute({ title: template.title })}>
          <div key={template.id} className="w-[250px]">
            <img src={template.coverUrl} alt={template.description} />
            <h2>{template.author}</h2>
            <p>{template.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
