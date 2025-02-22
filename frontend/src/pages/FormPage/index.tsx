import { useParams } from 'react-router-dom';
import { ViewFormRouteParams } from '@/app/lib/routes';
import { trpc } from '@/app/lib/trpc';
import Loader from '@/components/ui/loader';
import { Heart, HeartOff } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

import CreateForm from '../CreateForm';
import Comments from '@/widgets/Comments';

const FormPage = () => {
  const [formData, setFormData] = useState<Record<string, string | string[]>>(
    {}
  );

  const [isFormLocked, setIsFormLocked] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const handleGoBack = () => {
    navigate(-1);
  };
  const toggleFormLock = () => {
    setIsFormLocked(!isFormLocked);
  };
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role;

  const { id } = useParams() as ViewFormRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getForm.useQuery(
    { id: id }
  );
  const [likes, setLikes] = useState(data?.form.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

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
    <>
      {isFormLocked && (
        <div className="w-1/2 m-auto text-center">
          <p>Форма временно заблокирована администратором.</p>
          <button
            onClick={handleGoBack}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Назад
          </button>
        </div>
      )}

      {!isFormLocked && (
        <>
          <form
            onSubmit={handleSubmit}
            className="w-1/2 mx-auto p-6 bg-transparent shadow-md rounded-lg relative"
          >
            <h2 className="text-center text-3xl">{data.form.title}</h2>
            <p className="text-center text-gray-300 text-xl">
              by {data.form.author_id}
            </p>

            <Button
              disabled={!isSignedIn && true}
              className="flex flex-col items-center absolute top-5 right-5"
              onClick={handleLike}
            >
              {isLiked ? (
                <>
                  <HeartOff />
                  {data.form.likes}
                </>
              ) : (
                <>
                  <Heart />
                  {data.form.likes}
                </>
              )}
            </Button>

            <div className="mb-4 text-center">{data.form.description}</div>
            <div className="flex flex-col gap-4 w-1/2 m-auto">
              {data.form.fields.map((field) => {
                switch (field.type) {
                  case 'text':
                    return (
                      <div key={field.id} className="field">
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label}
                        </label>
                        <input
                          disabled={!isSignedIn && true}
                          className="w-full"
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
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label}
                        </label>
                        <textarea
                          disabled={!isSignedIn && true}
                          className="w-full"
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
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label}
                        </label>
                        {field.options.map((option) => (
                          <div key={option} className="flex gap-2">
                            <input
                              disabled={!isSignedIn && true}
                              type="radio"
                              id={option}
                              name={field.id}
                              value={option}
                              checked={formData[field.id] === option}
                              onChange={() =>
                                handleInputChange(field.id, option)
                              }
                            />
                            <label htmlFor={option}>{option}</label>
                          </div>
                        ))}
                      </div>
                    );

                  case 'checkbox':
                    return (
                      <div key={field.id} className="field ">
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label}
                        </label>
                        {field.options.map((option) => (
                          <div
                            key={option}
                            className="flex gap-2 items-centerw"
                          >
                            <input
                              disabled={!isSignedIn && true}
                              type="checkbox"
                              id={option}
                              name={field.id}
                              value={option}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              checked={
                                (formData[field.id] as string[])?.includes(
                                  option
                                ) || false
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
              <Button
                disabled={!isSignedIn && true}
                type="submit"
                variant={'outline'}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </Button>
              {userRole === 'admin' && (
                <div className="flex justify-center">
                  <Button
                    onClick={toggleFormLock}
                    variant={'outline'}
                    className="bg-red-600 text-center text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    {isFormLocked ? 'Разблокировать' : 'Заблокировать'}
                  </Button>
                </div>
              )}
            </div>
          </form>
        </>
      )}
      <Comments comments={data.form.comments} />
    </>
  );
};

export default FormPage;
