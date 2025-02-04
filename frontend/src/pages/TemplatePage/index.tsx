import { useParams } from 'react-router-dom';
import { ViewTemplateRouteParams } from '@/lib/routes';

const TemplatePage = () => {
  const { title } = useParams() as ViewTemplateRouteParams;
  return <div>{title}</div>;
};

export default TemplatePage;
