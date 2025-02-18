import { Link } from 'react-router-dom';
import { trpc } from '../../app/lib/trpc';
import { getFormRoute } from '../../app/lib/routes';
import Loader from '@/components/ui/loader';
import Card from '../../components/ui/card';

const FormsList = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getForms.useQuery();
  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div className="text-center">Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <section className="container m-auto w-1/2">
      <div className="flex gap-3">
        
        <div className="flex gap-5">
          {data.forms.map((form) => (
            <Card
              url={getFormRoute({ title: form.title })}
              title={form.title}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={'/forms'}>Show all</Link>
      </div>
    </section>
  );
};

export default FormsList;
