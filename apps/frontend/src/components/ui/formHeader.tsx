import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useTranslation } from 'react-i18next';

interface FormHeaderProps {
  previewMode: boolean;
  togglePreviewMode: () => void;
  resetForm: () => void;
}

export const FormHeader = ({ previewMode, togglePreviewMode, resetForm }: FormHeaderProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{t('new_form')}</h1>
      <div className="flex gap-2">
        <Button
          type="button"
          onClick={togglePreviewMode}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          <Icon name="watch" size={20} />
          {previewMode ? `${t('edit_mode')}` : `${t('preview')}`}
        </Button>
        <Button
          type="button"
          onClick={resetForm}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          <Icon name="reset" size={20} />
          {t('reset')}
        </Button>
      </div>
    </div>
  );
};