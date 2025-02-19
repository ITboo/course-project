import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";
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
  return (
    <Section>
    <p className="text-xl text-gray-600 text-center mb-4">
      Can't find? Search your template by field
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