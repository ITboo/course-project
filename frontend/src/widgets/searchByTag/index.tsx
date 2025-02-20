import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const tags = [
    { id: 1, title: 'Research' },
    { id: 2, title: 'Hobby' },
    { id: 3, title: 'Finance' },
    { id: 4, title: 'Corporate' },
    { id: 5, title: 'Polls' },
    { id: 6, title: 'Sport' },
  ];
const SearchByTag = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const handleTagClick = (theme: string) => {
    navigate(`/forms?theme=${encodeURIComponent(theme)}`);
  };
  return (
    <Section>
    <p className="text-xl text-gray-600 text-center mb-4">
      {t('cant_find')}
      
    </p>
    <div className="flex gap-2 justify-center">
      {tags.map((tag) => (
        <button onClick={() => handleTagClick(tag.title.toLocaleLowerCase())}>
          <Badge variant="outline">{tag.title}</Badge>
        </button >
      ))}
    </div>
    </Section>
  )
}

export default SearchByTag