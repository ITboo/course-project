import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { trpc } from '../../app/lib/trpc';
import Loader from '@/components/ui/loader';
import FormsList from '@/widgets/FormsList';

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
        <ul>
          {filteredData.map((item) => (
            <li
              key={item.id}
              className="bg-white p-4 mb-2 shadow-md rounded-md"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forms;