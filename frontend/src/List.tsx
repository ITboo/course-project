import { trpc } from "./lib/trpc";

const List = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getTemplates.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
console.log(data)
  return (
    <div>
      <h1>All Items</h1>
      <div className="flex flex-wrap">
      {data.templates.map((template) => (
        <div key={template.id}>
            <img src={template.coverUrl} alt={template.description} />
          <h2>{template.author}</h2>
          <p>{template.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default List;