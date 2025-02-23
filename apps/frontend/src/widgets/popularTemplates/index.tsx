import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { format } from 'date-fns/format';
import { trpc } from '../../app/lib/trpc';
import { getFormRoute } from '@/app/lib/routes';
import Loader from '@/components/ui/loader';
import Section from '@/components/ui/section';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PopularTemplates = () => {
  let index = 1;
  const { t } = useTranslation();

  const { data, error, isLoading, isFetching, isError } =
    trpc.getBestForms.useQuery();
  if (isLoading || isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <div className="text-center">Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <Section>
      <p className="text-xl text-gray-600 text-center mb-4">{t('best')}</p>
      <Table className="w-1/2 m-auto mb-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>{t('table_title')}</TableHead>
            <TableHead>{t('table_author')}</TableHead>
            <TableHead className='text-center'>{t('table_filled')}</TableHead>
            <TableHead>{t('table_created')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((form) => (
            
            <TableRow>
              <TableCell className="font-medium">{index++}</TableCell>
              <TableCell><Link to={getFormRoute({id:form.id})} className='text-blue-500 font-bold hover:text-blue-800'>{form.title}</Link></TableCell>
              <TableCell>{form.author_id}</TableCell>
              <TableCell className='text-center'>{form.filled_times}</TableCell>
              <TableCell>{format(form.created_at, 'dd-MM-yyyy')}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export default PopularTemplates;
