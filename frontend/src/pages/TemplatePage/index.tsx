import { useParams } from 'react-router-dom';
import { ViewFormRouteParams } from '@/app/lib/routes';
import { trpc } from '@/app/lib/trpc';
import Loader from '@/components/ui/loader';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const TemplatePage = () => {
  const [formData, setFormData] = useState<Record<string, string | string[]>>(
    {}
  );
  const { id } = useParams() as ViewFormRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getForm.useQuery(
    { id: id }
  );

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleCheckboxChange = (
    fieldId: string,
    option: string,
    isChecked: boolean
  ) => {
    setFormData((prev) => {
      const currentValues = (prev[fieldId] as string[]) || [];
      const updatedValues = isChecked
        ? [...currentValues, option] // Добавляем опцию
        : currentValues.filter((value) => value !== option); // Удаляем опцию

      return {
        ...prev,
        [fieldId]: updatedValues,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div className="text-center">Error: {error.message}</div>;
  }
  if (!data.form) {
    return <div className="text-center">Not Found</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 container m-auto">
      <h2 className="text-center text-5xl">{data.form.title}</h2>
      <p className="text-center text-gray-300 text-3xl">
        by {data.form.author_id}
      </p>
      <div className="flex flex-col items-center">
        <Heart /> {data.form.likes}
      </div>
      <div className="fields">
        {data.form.fields.map((field) => {
          switch (field.type) {
            case 'text':
              return (
                <div key={field.id} className="field">
                  <label>{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={(formData[field.id] as string) || ''}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                  />
                </div>
              );

            case 'textarea':
              return (
                <div key={field.id} className="field">
                  <label>{field.label}</label>
                  <textarea
                    placeholder={field.placeholder}
                    value={(formData[field.id] as string) || ''}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                  />
                </div>
              );

            case 'radio':
              return (
                <div key={field.id} className="field">
                  <label>{field.label}</label>
                  {field.options.map((option) => (
                    <div key={option}>
                      <input
                        type="radio"
                        id={option}
                        name={field.id}
                        value={option}
                        checked={formData[field.id] === option}
                        onChange={() => handleInputChange(field.id, option)}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              );

            case 'checkbox':
              return (
                <div key={field.id} className="field">
                  <label>{field.label}</label>
                  {field.options.map((option) => (
                    <div key={option}>
                      <input
                        type="checkbox"
                        id={option}
                        name={field.id}
                        value={option}
                        checked={
                          (formData[field.id] as string[])?.includes(option) ||
                          false
                        }
                        onChange={(e) =>
                          handleCheckboxChange(
                            field.id,
                            option,
                            e.target.checked
                          )
                        }
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
      <div className="flex justify-center">
        <Button type="submit" variant={'outline'} className="flex text-center">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default TemplatePage;
