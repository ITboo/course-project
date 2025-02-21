import { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableField } from '@/components/ui/sortableField';
import { Icon } from '@/components/ui/icon';
import { useTranslation } from 'react-i18next';

const initialFormData: FormData = {
  title: '',
  description: '',
  theme: 'general',
  isPrivate: false,
  fields: [],
};

const themes = [
  { value: 'general', label: 'General' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'survey', label: 'Survey' },
  { value: 'registration', label: 'Registration' },
];

const validateForm = (values: FormData) => {
  const errors: FormErrors = {};

  if (!values.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!values.description.trim()) {
    errors.description = 'Description is required';
  }

  if (values.fields.length === 0) {
    errors.fields = 'At least one field is required';
  }

  values.fields.forEach((field, index) => {
    if (
      (field.type === 'checkbox' || field.type === 'radio') &&
      (!field.options || field.options.length < 2)
    ) {
      if (!errors.fields) errors.fields = '';
      errors.fields += `Field "${field.label}" must have at least 2 options. `;
    }
  });

  return errors;
};

export default function CreateForm() {
  const [previewMode, setPreviewMode] = useState(false);
  const { t } = useTranslation();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addField = (
    values: FormData,
    setValues: (values: FormData) => void
  ) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
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

  const handleDragEnd = (
    event: DragEndEvent,
    values: FormData,
    setValues: (values: FormData) => void
  ) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = values.fields.findIndex(
        (field) => (field.id || field.order.toString()) === active.id
      );
      const newIndex = values.fields.findIndex(
        (field) => (field.id || field.order.toString()) === over.id
      );

      setValues({
        ...values,
        fields: arrayMove(values.fields, oldIndex, newIndex),
      });
    }
  };

  return (
    <div className="min-h-screen bg-transparent py-8">
      <div className="max-w-4xl mx-auto bg-transparent rounded-lg shadow-md p-6">
        <Formik
          initialValues={initialFormData}
          validate={validateForm}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            setValues,
            handleChange,
            errors,
            resetForm,
            isSubmitting,
          }) => (
            <Form className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">{t('new_form')}</h1>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewMode(!previewMode)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    <Icon name="watch" size={20} />
                    {previewMode ? `${t("edit_mode")}` : `${t("preview")}`}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm()}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  >
                    <Icon name="reset" size={20} />
                    {t("reset")}
                  </button>
                </div>
              </div>

              {!previewMode ? (
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
                          errors.title ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter form title"
                      />
                      {errors.title && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.title}
                        </p>
                      )}
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
                          errors.description ? 'border-red-500' : ''
                        }`}
                        rows={3}
                        placeholder="Enter form description"
                      />
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {t("theme")}
                      </label>
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
                      <label className="ml-2 block text-sm text-gray-900">
                        {t('make_private')}
                      </label>
                    </div>
                  </div>

                  {errors.fields && (
                    <p className="text-sm text-red-500">{errors.fields}</p>
                  )}

                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={(event) =>
                      handleDragEnd(event, values, setValues)
                    }
                  >
                    <SortableContext
                      items={values.fields.map(
                        (field) => field.id || field.order.toString()
                      )}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-4">
                        {values.fields.map((field, index) => (
                          <SortableField
                            key={field.id || index}
                            field={field}
                            index={index}
                            values={values}
                            setValues={setValues}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>

                  <button
                    type="button"
                    onClick={() => addField(values, setValues)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Icon name="add" size={20} />
                    {t("add_field")}
                  </button>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? `${t("submitting")}` : `${t("create")}`}
                    </button>
                  </div>
                </>
              ) : (
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
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                          />
                        )}
                        {field.type === 'textarea' && (
                          <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            rows={3}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                          />
                        )}
                        {field.type === 'checkbox' && (
                          <div className="space-y-2">
                            {field.options?.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className="flex items-center"
                              >
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
                              <div
                                key={optionIndex}
                                className="flex items-center"
                              >
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
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
