import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './button';
import { Icon } from './icon';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/forms?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="search"
        placeholder={t("search")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent p-2 border border-gray-300 rounded-2xl focus:outline-none"
      />
      <Button type="submit" className="p-2 hover:text-blue-500">
        <Icon name={'search'} size={30} />
      </Button>
    </form>
  );
};

export default SearchForm;
