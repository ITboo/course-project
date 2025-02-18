import { Link } from 'react-router-dom';
import { trpc } from '../../app/lib/trpc';
import { getBlankFormRoute, getFormRoute } from '../../app/lib/routes';
import { CirclePlus } from 'lucide-react';
import Loader from '@/components/ui/loader';
import Card from '../../components/ui/card';

const List = () => {
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
        <Card url={getBlankFormRoute()} title={'Add Form'} className="">
          <CirclePlus size={75} />
        </Card>
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

export default List;
