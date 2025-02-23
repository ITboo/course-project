import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/app/lib/trpc';
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { FormHeader } from '@/components/ui/formHeader';
import { FormFields } from '@/components/ui/formFields';
import { SortableFields } from '@/components/ui/sortable';
import { PreviewMode } from '../Preview';
import { Icon } from '@/components/ui/icon';
import { FormData } from '@/app/types';

export default function CreateForm() {
  const [previewMode, setPreviewMode] = useState(false);
  const { t } = useTranslation();
  const { user } = useUser();
  const createFormMutation = trpc.createForm.useMutation();

  const initialFormData: FormData = {
    title: '',
    description: '',
    theme: 'general',
    isPrivate: false,
    fields: [],
    img: '',
    author_id: ''
  };

  const themes = [
    { value: 'general', label: 'General' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'survey', label: 'Survey' },
    { value: 'registration', label: 'Registration' },
  ];

  /*const validateForm = (values: FormData) => {
    const errors:FormikErrors<FormErrors> = {};

    if (!values.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!values.description.trim()) {
      errors.description = 'Description is required';
    }

    if (values.fields.length === 0) {
      errors.fields = 'At least one field is required';
    }
    let fieldErrors = '';
    values.fields.forEach((field, _index) => {
      if (
        (field.type === 'checkbox' || field.type === 'radio') &&
        (!field.options || field.options.length < 2)
      ) {
        fieldErrors += `Field "${field.label}" must have at least 2 options. `;
      }
    });
  
    if (fieldErrors) {
      errors.fields = fieldErrors;
    }
  
    return errors;
  };*/

  const handleSubmit = async (formData:FormData, setSubmitting:(isSubmitting: boolean) => void) => {
    const dataWithAuthor = {
      ...formData,
      author_id: user?.id||'',
      created_at: new Date().toISOString(),
      id: crypto.randomUUID(),
      img: formData.img || '',
      likes: 0,
      filled_times: 0,
      is_private: false,
    };
    console.log('Data:', dataWithAuthor);
    try {
      const result = await createFormMutation.mutateAsync(dataWithAuthor);
      console.log('Form created successfully:', result);
    } catch (error) {
      console.error('Error during creating the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const addField = (
    values: FormData,
    setValues: (values:any) => void
  ) => {
    const newField = {
      id: crypto.randomUUID().toString(),
      label: 'New Field',
      type: 'text',
      required: false,
      options: [],
      order: values.fields.length,
    };
    setValues({
      ...values,
      fields: [...values.fields, newField],
    });
  };

  return (
    <div className="min-h-screen bg-transparent py-8">
      <div className="max-w-4xl mx-auto bg-transparent rounded-lg shadow-md p-6">
        <Formik
          initialValues={initialFormData}
          //validate={validateForm}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            handleSubmit(values, setSubmitting);
          }}
        >
          {({
            values,
            setValues,
            handleChange,
           // errors,
            resetForm,
            isSubmitting,
          }) => (
            <Form className="space-y-6">
              <FormHeader
                previewMode={previewMode}
                togglePreviewMode={() => setPreviewMode(!previewMode)}
                resetForm={resetForm}
              />

              {!previewMode ? (
                <>
                  <FormFields
                    values={values}
                    //errors={errors}
                    handleChange={handleChange}
                    themes={themes}
                  />

                  {/*errors.fields && (
                    <p className="text-sm text-red-500">{errors.fields}</p>
                  )*/}

                  <SortableFields values={values} setValues={setValues} />

                  <Button
                    type="button"
                    onClick={() => addField(values, setValues)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Icon name="add" size={20} />
                    {t('add_field')}
                  </Button>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? `${t('submitting')}` : `${t('create')}`}
                    </Button>
                  </div>
                </>
              ) : (
                <PreviewMode values={values} />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
