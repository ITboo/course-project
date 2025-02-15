import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import Toolbar from './Toolbar';
import FormPreview from './FormPreview';
import { Plus, X } from 'lucide-react';

const formSchema = z.object({
  formName: z.string().min(1, 'Form Name is required'),
  formDescription: z.string().optional(),
  fields: z.array(
    z.object({
      type: z.enum(['text', 'textarea', 'checkbox', 'radio']),
      label: z.string().min(1, 'Label is required'),
      options: z.array(z.string()).optional(),
    })
  ),
});

const formikValidationSchema = toFormikValidationSchema(formSchema);

const initialValues = {
  formName: '',
  formDescription: '',
  fields: [],
};
const FormBuilder = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

  const togglePreviewMode = () => {
    setIsPreviewMode((prev) => !prev);
  };

  return (
    <div>
      <h1 className='text-center text-5xl mb-[20px]'>Form Builder</h1>

      {/* Режим редактирования */}
      {!isPreviewMode && (
        <div className='w-1/2 m-auto flex justify-between'>
          {/* Основной Formik */}
          <Formik
            initialValues={formValues}
            validationSchema={formikValidationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
            enableReinitialize // Позволяет Formik переинициализировать значения при изменении initialValues
          >
            {({ values, setFieldValue }) => {
              React.useEffect(() => {
                setFormValues(values);
              }, [values]);

              return (
                <>
                  {/* Форма */}
                  <div className=' w-full'>
                    <Form className='border p-2'>
                      {/* Отображаем название и описание формы */}
                      <div >
                        <h2 className='text-center text-4xl'>{values.formName}</h2>
                        <p className='text-center text-xl'>{values.formDescription}</p>
                      </div>

                      <FieldArray name="fields">
                        {({ push, remove }) => (
                          <div>
                            {values.fields.map((field, index) => (
                              <div
                                key={index}
                                style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}
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

                                <div className='flex gap-1 flex-col'>
                                  <label>Label:</label>
                                  <Field name={`fields[${index}].label`} className="border"/>
                                </div>

                                {/* Поле для ввода или текстовой области */}
                                {(field.type === "text" || field.type === "textarea") && (
                                  <div className='flex gap-1 flex-col'>
                                    <label>Preview:</label>
                                    {field.type === "text" && (
                                      <Field
                                        type="text"
                                        name={`fields[${index}].preview`}
                                        placeholder="Text input preview"
                                        className="border mb-1"
                                      />
                                    )}
                                    {field.type === "textarea" && (
                                      <Field
                                        as="textarea"
                                        name={`fields[${index}].preview`}
                                        placeholder="Textarea preview"
                                        className="border mb-1"
                                      />
                                    )}
                                  </div>
                                )}

                                {/* Опции для чекбоксов и радиокнопок */}
                                {(field.type === "radio" || field.type === "checkbox") && (
                                  <FieldArray name={`fields[${index}].options`}>
                                    {({ push: pushOption, remove: removeOption }) => (
                                      <div>
                                        {field.options?.map((option, optionIndex) => (
                                          <div key={optionIndex}>
                                            <Field name={`fields[${index}].options[${optionIndex}]`} className="border"/>
                                            <button type="button" onClick={() => removeOption(optionIndex)} className='text-red-300 p-3'>
                                            <X />
                                            </button>
                                          </div>
                                        ))}
                                        <button type="button" onClick={() => pushOption("")} className='px-2 py-1 flex gap-1'>
                                        <Plus /> Add option
                                        </button>
                                      </div>
                                    )}
                                  </FieldArray>
                                )}

                                <button type="button" onClick={() => remove(index)} className='border text-red-300 p-1 mt-[10px]'>
                                  Remove Field
                                </button>
                              </div>
                            ))}

                            <button type="submit">Submit</button>
                          </div>
                        )}
                      </FieldArray>
                    </Form>
                  </div>

                  {/* Toolbar */}
                  <div style={{ width: "250px", borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
                    <FieldArray name="fields">
                      {({ push }) => (
                        <Toolbar
                          onAddField={(field) => push(field)} // Передаем функцию push
                          onTogglePreview={togglePreviewMode}
                          formName={values.formName}
                          onFormNameChange={(value) => setFieldValue("formName", value)} // Передаем setFieldValue
                          formDescription={values.formDescription}
                          onFormDescriptionChange={(value) => setFieldValue("formDescription", value)} // Передаем setFieldValue
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
          formName={formValues.formName}
          formDescription={formValues.formDescription}
          fields={formValues.fields}
          onEdit={togglePreviewMode} // Передаем функцию для возврата в режим редактирования
        />
      )}
    </div>
  );
};

export default FormBuilder;
