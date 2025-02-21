import Loader from '@/components/ui/loader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { trpc } from '../../app/lib/trpc';
import Section from '@/components/ui/section';
import { useTranslation } from 'react-i18next';
import {format} from 'date-fns/format'

const PopularTemplates = () => {
  const date = Date.now()
  const { t } = useTranslation();
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
      <p className="text-xl text-gray-600 text-center mb-4">
        {t('best')}
        
      </p>
    <Table className='w-1/2 m-auto mb-5'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Filled forms</TableHead>
          <TableHead>Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.forms.map((form)=>(
          <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>{form.title}</TableCell>
          <TableCell>{form.author_id}</TableCell>
          <TableCell>{form.likes}</TableCell>
          <TableCell>{format(date,'yyyy-MM-dd')}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    </Section>
  );
};

export default PopularTemplates;
