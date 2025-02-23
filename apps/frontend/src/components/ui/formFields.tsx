import { FormData, FormErrors } from '@/app/types';
import { useTranslation } from 'react-i18next';

interface FormFieldsProps {
  values: FormData;
  errors?: FormErrors;
  handleChange: (e: React.ChangeEvent<any>) => void;
  themes: { value: string; label: string }[];
}

export const FormFields = ({ values, errors, handleChange, themes }: FormFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="space-y-4 bg-transparent p-4 rounded-lg border">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            {t('title')} *
          </label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            className={`block w-full rounded-md border-300 shadow-sm bg-transparent focus:border-blue-500 focus:ring-blue-500 ${
              errors?.title ? 'border-red-500' : ''
            }`}
            placeholder="Enter form title"
          />
          {errors?.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('description')} *
          </label>
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors?.description ? 'border-red-500' : ''
            }`}
            rows={3}
            placeholder="Enter form description"
          />
          {errors?.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{t('theme')}</label>
          <select
            name="theme"
            value={values.theme}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {themes.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isPrivate"
            checked={values.isPrivate}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">{t('make_private')}</label>
        </div>
      </div>
    </>
  );
};