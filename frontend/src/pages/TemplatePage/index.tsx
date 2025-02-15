import { useParams } from 'react-router-dom';
import { ViewTemplateRouteParams } from '@/lib/routes';
import { trpc } from '@/lib/trpc';
import Loader from '@/components/ui/loader';

const TemplatePage = () => {
  const { title } = useParams() as ViewTemplateRouteParams;

  const { data, error, isLoading, isFetching, isError } =
    trpc.getTemplate.useQuery({ title: title });
  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div className="text-center">Error: {error.message}</div>;
  }
  if (!data.template) {
    return <div className="text-center">Not Found</div>;
  }
  return <div>{data.template.title}</div>;
};

export default TemplatePage;
