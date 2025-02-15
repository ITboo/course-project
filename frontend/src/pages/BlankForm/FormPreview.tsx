import React from 'react';

const FormPreview = ({ formName, formDescription, fields, onEdit }) => {
  return (
    <div>
      <h2>{formName}</h2>
      <p>{formDescription}</p>
      <form>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <label>{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                name={`preview[${index}]`}
                placeholder="Text input preview"
                readOnly // Поле только для чтения
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                name={`preview[${index}]`}
                placeholder="Textarea preview"
                readOnly // Поле только для чтения
              />
            )}
            {field.type === 'checkbox' &&
              field.options?.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label>
                    <input
                      type="checkbox"
                      name={`preview[${index}][${optionIndex}]`}
                      value={option}
                      readOnly // Поле только для чтения
                    />
                    {option}
                  </label>
                </div>
              ))}
            {field.type === 'radio' &&
              field.options?.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`preview[${index}]`}
                      value={option}
                      readOnly // Поле только для чтения
                    />
                    {option}
                  </label>
                </div>
              ))}
          </div>
        ))}
      </form>

      {/* Кнопка для возврата в режим редактирования */}
      <button type="button" onClick={onEdit} style={{ marginTop: '20px' }}>
        Edit Form
      </button>
    </div>
  );
};

export default FormPreview;