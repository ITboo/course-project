import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
  return (
    <Section>
    <p className="text-xl text-gray-600 text-center mb-4">
      {t('cant_find')}
      
    </p>
    <div className="flex gap-2 justify-center">
      {tags.map((tag) => (
        <Link to="/" key={tag.id}>
          <Badge variant="outline">{tag.title}</Badge>
        </Link>
      ))}
    </div>
    </Section>
  )
}

export default SearchByTag