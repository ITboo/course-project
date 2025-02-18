import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
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

// Тип для всей формы
type FormValues = {
  id: string;
  title: string;
  description: string;
  author_id: string;
  img: string;
  likes: number;
  is_private: boolean;
  theme: string;
  fields: Field[]; // Массив полей
};



const FormBuilder = () => {
  const initialValues: FormValues = {
    id: '2',
    title: '',
    author_id: '',
    description: '',
    img: '',
    likes: 0,
    is_private: false,
    theme: '',
    fields: [],
  };

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  return (
    <div>
      <h1 className="text-center text-5xl mb-[20px]">Form Builder</h1>
    <Formik
      initialValues={formValues}
      validationSchema={formikValidationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', values); // Проверка, что onSubmit вызывается
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <label>Title:</label>
            <Field
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label>Description:</label>
            <Field
              as="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <FieldArray name="fields">
            {({ push, remove }) => (
              <div>
                {values.fields.map((field, index) => (
                  <div key={index}>
                    <Field
                      type="text"
                      name={`fields[${index}].value`}
                      value={field.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => push({ value: '' })}>
                  Add Field
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    </div>
  );
};







const FormBuilderыы = () => {
  const initialValues: FormValues = {
    id: '2',
    title: '',
    author_id: '',
    description: '',
    img: '',
    likes: 0,
    is_private: false,
    theme: '',
    fields: [],
  };

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

  const createForm = trpc.createForm.useMutation();

  const togglePreviewMode = () => {
    setIsPreviewMode((prev) => !prev);
  };

  return (
    <div>
      <h1 className="text-center text-5xl mb-[20px]">Form Builder</h1>

      {/* Режим редактирования */}
      {!isPreviewMode && (
        <div className="w-1/2 m-auto flex justify-between">
          <Formik
            initialValues={formValues}
            validationSchema={formikValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log('Form submitted:', values);
              setSubmitting(false);
            }}
            enableReinitialize
          >
            {({
              values,
              setFieldValue,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => {
              React.useEffect(() => {
                setFormValues(values);
              }, [values]);

              return (
                <>
                  <div className="w-full">
                    <Form onSubmit={handleSubmit} className="border p-2">
                      <div>
                        <h2 className="text-center text-4xl mb-3 mt-3">
                          {values.title ? values.title : 'Form title'}
                        </h2>
                        <p className="text-center text-xl mb-2">
                          {values.description
                            ? values.description
                            : 'Form description'}
                        </p>
                      </div>
                      {values.fields.length === 0 && (
                        <div className="text-center text-gray-500 p-4">
                          Add any field you want, describe labels, add options.
                          Create the best form for your needs!
                        </div>
                      )}
                      <FieldArray name="fields">
                        {({ push, remove }) => (
                          <div>
                            {values.fields?.map((field, index) => (
                              <FieldArrayItem
                                key={index}
                                field={field}
                                index={index}
                                remove={remove}
                                setFieldValue={setFieldValue}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                              />
                            ))}
                          </div>
                        )}
                      </FieldArray>
                      <button type="submit">Submit</button>
                    </Form>
                  </div>

                  <div
                    style={{
                      width: '250px',
                      borderLeft: '1px solid #ccc',
                      paddingLeft: '20px',
                    }}
                  >
                    <FieldArray name="fields">
                      {({ push }) => (
                        <Toolbar
                          onAddField={(field) => push(field)}
                          onTogglePreview={togglePreviewMode}
                          title={values.title}
                          onFormNameChange={(value) =>
                            setFieldValue('title', value)
                          }
                          description={values.description}
                          onFormDescriptionChange={(value) =>
                            setFieldValue('description', value)
                          }
                        />
                      )}
                    </FieldArray>
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
      )}

      {/* Режим превью */}
      {isPreviewMode && (
        <FormPreview
          title={formValues.title}
          description={formValues.description}
          fields={formValues.fields}
          onEdit={togglePreviewMode}
        />
      )}
    </div>
  );
};

const FieldArrayItem = ({
  field,
  index,
  remove,
  setFieldValue,
  handleChange,
  handleBlur,
}) => {
  return (
    <div
      style={{
        marginBottom: '20px',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      <div>
        <label>Field Type: </label>
        <Field as="select" name={`fields[${index}].type`}>
          <option value="text">Text Input</option>
          <option value="textarea">Textarea</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio Button</option>
        </Field>
      </div>

      <div className="flex gap-1 flex-col">
        <label>Label:</label>
        <Field
          name={`fields[${index}].label`}
          className="border"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      {(field.type === 'text' || field.type === 'textarea') && (
        <div className="flex gap-1 flex-col">
          <label>Preview:</label>
          {field.type === 'text' && (
            <Field
              type="text"
              name={`fields[${index}].preview`}
              placeholder="Text input preview"
              className="border mb-1"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {field.type === 'textarea' && (
            <Field
              as="textarea"
              name={`fields[${index}].preview`}
              placeholder="Textarea preview"
              className="border mb-1"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
      )}

      {(field.type === 'radio' || field.type === 'checkbox') && (
        <FieldArray name={`fields[${index}].options`}>
          {({ push: pushOption, remove: removeOption }) => (
            <div>
              {field.options?.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <Field
                    name={`fields[${index}].options[${optionIndex}]`}
                    className="border"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(optionIndex)}
                    className="text-red-300 p-3"
                  >
                    <X />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => pushOption('')}
                className="px-2 py-1 flex gap-1"
              >
                <Plus /> Add option
              </button>
            </div>
          )}
        </FieldArray>
      )}

      <button
        type="button"
        onClick={() => remove(index)}
        className="border text-red-300 p-1 mt-[10px]"
      >
        Remove Field
      </button>
    </div>
  );
};

export default FormBuilder;
