import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    navigate(`/forms?q=${encodeURIComponent(query)}`); // Перенаправляем на /forms с параметром q
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="search"
        placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        <Search/>
      </button>
    </form>
  );
};

export default SearchForm;