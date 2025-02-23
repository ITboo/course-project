import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { trpc } from '../../app/lib/trpc';
import Loader from '@/components/ui/loader';
import { getFormRoute } from '@/app/lib/routes';
import Card from '@/components/ui/card';

type FormItem = {
  id: string;
  title: string;
  author_id: string;
  likes: number;
  fields: (
    | { placeholder: string; type: string; id: string; label: string }
    | { options: string[]; type: string; id: string; label: string }
  )[];
};

const Forms = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getForms.useQuery();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<FormItem[]>([]);

  // Эффект для обработки поискового запроса
  useEffect(() => {
    if (data) {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get('q') || '';
      setSearchQuery(query);

      if (query) {
        const filtered = data.forms.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data.forms);
      }
    }
  }, [location.search, data]);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div className="text-center">Error: {error.message}</div>;
  }

  return (
    <div className="container m-auto">
      <div className="container mx-auto p-4">
        {searchQuery && (
          <p className="mb-4">Результаты поиска для: "{searchQuery}"</p>
        )}
        <div className='flex gap-5 flex-wrap justify-center'>
          {filteredData.map((form) => (
            <Card
            key={form.id}
            url={getFormRoute({ id: form.id })}
            title={form.title}
            author={form.author_id}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;