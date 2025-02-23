
interface Field {
  label: string;
  type: 'text' | 'textarea' | 'checkbox' | 'radio';
  options?: string[];
}

interface PreviewModeValues {
  title: string;
  description: string;
  fields: Field[];
}

interface PreviewModeProps {
  values: PreviewModeValues;
}


export const PreviewMode = ({ values }:PreviewModeProps) => {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold mb-2">{values.title}</h2>
        <p className="text-gray-600">{values.description}</p>
      </div>
      <div className="space-y-4">
        {values.fields.map((field, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {field.type === 'text' && (
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={''}
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                placeholder={''}
              />
            )}
            {field.type === 'checkbox' && (
              <div className="space-y-2">
                {field.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {field.type === 'radio' && (
              <div className="space-y-2">
                {field.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center">
                    <input
                      type="radio"
                      name={`field-${index}`}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

