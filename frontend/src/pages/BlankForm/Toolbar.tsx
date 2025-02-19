import { Eye, RotateCcw } from 'lucide-react';

const xToolbar = ({
  onAddField,
  onTogglePreview,
  onReset,
  title,
  onFormNameChange,
  description,
  onFormDescriptionChange,
}) => {
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <button
          type="button"
          onClick={onTogglePreview}
          className="border p-2 flex gap-1"
        >
          <Eye />
          Preview
        </button>

        <button
          type="button"
          onClick={onReset}
          className="border p-2 flex gap-1"
        >
          <RotateCcw />
          Reset
        </button>
      </div>
      {/* Инпут для названия формы */}
      <div className="flex flex-col gap-1 w-[500px]">
        <label className='font-bold'>Form Name:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => onFormNameChange(e.target.value)}
          placeholder="Enter form name"
          className="border"
        />
      </div>

      {/* Инпут для описания формы */}
      <div className="flex flex-col gap-1 w-[500px]">
        <label className='font-bold'>Form Description:</label>
        <textarea
          value={description}
          onChange={(e) => onFormDescriptionChange(e.target.value)}
          placeholder="Enter form description"
          className="border"
        />
      </div>

      {/* Кнопки для добавления полей */}
      <div className="flex gap-2 flex-col mt-[20px]">
        <button
          type="button"
          onClick={() =>
            onAddField({ id: Date.now().toString(), type: 'text', label: '', options: [], placeholder: '', preview: '' })
          }
          className="border"
        >
          Add Text Input
        </button>
        <button
          type="button"
          onClick={() =>
            onAddField({
              id: Date.now().toString(),
              type: 'textarea',
              label: '',
              options: [],
              placeholder: '',
              preview: '',
            })
          }
          className="border"
        >
          Add Textarea
        </button>
        <button
          type="button"
          onClick={() =>
            onAddField({ id: Date.now().toString(), type: 'checkbox', label: '', placeholder: '', options: [''] })
          }
          className="border"
        >
          Add Checkbox
        </button>
        <button
          type="button"
          onClick={() =>
            onAddField({ id: Date.now().toString(), type: 'radio', label: '', placeholder: '', options: [''] })
          }
          className="border"
        >
          Add Radio Button
        </button>
      </div>
    </div>
  );
};


const Toolbar = ({
  onAddField,
  onTitleChange,
  onDescriptionChange,
  title,
  description,
}) => {
  return (
    <div className="toolbar">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title} // Отображаем значение title
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description} // Отображаем значение description
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onAddField('text')}>Add Text Field</button>
        <button onClick={() => onAddField('textarea')}>Add Textarea</button>
        <button onClick={() => onAddField('radio')}>Add Radio Buttons</button>
        <button onClick={() => onAddField('checkbox')}>Add Checkboxes</button>
      </div>
    </div>
  );
};
export default Toolbar;
