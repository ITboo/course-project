import { trpc } from '../../app/lib/trpc';
import Loader from '@/components/ui/loader';
import { getFormRoute } from '../../app/lib/routes';
import Card from '../../components/ui/card';
import Section from '@/components/ui/section';

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
<Section>  
        <div className="flex gap-5 flex-wrap justify-center">
          {data.forms.map((form) => (
            <Card
            key={form.id}
              url={getFormRoute({ title: form.title })}
              title={form.title}
              author={form.author_id}
            />
          ))}
        </div>
</Section> 
  );
};

export default FormsList;
