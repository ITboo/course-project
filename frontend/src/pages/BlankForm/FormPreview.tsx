const FormPreview = ({ title, description, fields, onEdit }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <form>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <label>{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                name={`preview[${index}]`}
                placeholder="Text input preview"
                readOnly
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                name={`preview[${index}]`}
                placeholder="Textarea preview"
                readOnly
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
                      readOnly
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
                      readOnly
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