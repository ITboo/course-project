import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import Toolbar from './Toolbar';
import FormPreview from './FormPreview';
import { Plus, X } from 'lucide-react';
import { trpc } from '@/app/lib/trpc';
import {
  fieldSchema,
  zCreateFormTRPCInput,
} from '../../../../backend/src/router/createForm/input';

const formSchema = z.object(zCreateFormTRPCInput.shape);

const formikValidationSchema = toFormikValidationSchema(formSchema);

type Field = z.infer<typeof fieldSchema>;

const FormBuilder = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const initialValues = {
    id: Date.now().toString(),
    title: 'f',
    description: 'f',
    author_id: '1', // Замените на ID текущего пользователя
    created_at: new Date(),
    status: 'active',
    img: '',
    likes: 0,
    filled_times: 0,
    is_private: false,
    theme: '',
    fields: [], // Начальные поля
    comments: [],
  };

  const togglePreviewMode = () => {
    setIsPreviewMode((prev) => !prev);
  };

  return (
    <div>
      <h1 className="text-center text-5xl mb-[20px]">Form Builder</h1>

      {!isPreviewMode && (
        <div className="w-1/2 m-auto flex justify-between">
          <Formik
            initialValues={initialValues}
            validationSchema={formikValidationSchema}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              // Проверяем, есть ли поля в форме
              if (values.fields.length === 0) {
                setFieldError('fields', 'Добавьте хотя бы одно поле');
                setSubmitting(false);
                return; // Прерываем отправку формы
              }

              console.log('Form submitted:', values);
              setSubmitting(false);
            }}
            enableReinitialize
          >
            {({ values, setFieldValue, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="border p-2">
                <div>
                  <h2 className="text-center text-4xl mb-3 mt-3">
                    {values.title ? values.title : 'Form title'}
                  </h2>
                  <ErrorMessage name="title" component="div" className="text-red-500" />
                  <p className="text-center text-xl mb-2">
                    {values.description
                      ? values.description
                      : 'Form description'}
                  </p>
                  <ErrorMessage name="description" component="div" className="text-red-500" />
                </div>

                <FieldArray name="fields">
                  {({ push, remove }) => (
                    <div>
                      {values.fields.map((field, index) => (
                        <FieldArrayItem
                          key={index}
                          field={field}
                          index={index}
                          remove={remove}
                          setFieldValue={setFieldValue}
                        />
                      ))}
                      <ErrorMessage name="fields" component="div" className="text-red-500" />
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: Date.now().toString(),
                            type: 'text',
                            label: '',
                            placeholder: '',
                          })
                        }
                      >
                        Add Text Field
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: Date.now().toString(),
                            type: 'textarea',
                            label: '',
                            placeholder: '',
                          })
                        }
                      >
                        Add Textarea
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: Date.now().toString(),
                            type: 'radio',
                            label: '',
                            options: [''],
                          })
                        }
                      >
                        Add Radio Buttons
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: Date.now().toString(),
                            type: 'checkbox',
                            label: '',
                            options: [''],
                          })
                        }
                      >
                        Add Checkboxes
                      </button>
                    </div>
                  )}
                </FieldArray>

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {isPreviewMode && (
        <FormPreview
          title={initialValues.title}
          description={initialValues.description}
          fields={initialValues.fields}
          onEdit={togglePreviewMode}
        />
      )}
    </div>
  );
};

const FieldArrayItem = ({ field, index, remove, setFieldValue }) => {
  return (
    <div className="border p-2 mb-2">
      <div>
        <label>Field Type: </label>
        <Field as="select" name={`fields[${index}].type`}>
          <option value="text">Text Input</option>
          <option value="textarea">Textarea</option>
          <option value="radio">Radio Buttons</option>
          <option value="checkbox">Checkboxes</option>
        </Field>
      </div>

      <div>
        <label>Label:</label>
        <Field name={`fields[${index}].label`} className="border" />
      </div>

      {(field.type === 'text' || field.type === 'textarea') && (
        <div>
          <label>Placeholder:</label>
          <Field
            name={`fields[${index}].placeholder`}
            className="border"
          />
        </div>
      )}

      {(field.type === 'radio' || field.type === 'checkbox') && (
        <FieldArray name={`fields[${index}].options`}>
          {({ push: pushOption, remove: removeOption }) => (
            <div>
              {field.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <Field
                    name={`fields[${index}].options[${optionIndex}]`}
                    className="border"
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(optionIndex)}
                  >
                    Remove Option
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => pushOption('')}>
                Add Option
              </button>
            </div>
          )}
        </FieldArray>
      )}

      <button type="button" onClick={() => remove(index)}>
        Remove Field
      </button>
    </div>
  );
};

export default FormBuilder;
