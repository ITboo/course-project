import { Eye, RotateCcw } from 'lucide-react';

const Toolbar = ({
  onAddField,
  onTogglePreview,
  formName,
  onFormNameChange,
  formDescription,
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
          onClick={onTogglePreview}
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
          value={formName}
          onChange={(e) => onFormNameChange(e.target.value)}
          placeholder="Enter form name"
          className="border"
        />
      </div>

      {/* Инпут для описания формы */}
      <div className="flex flex-col gap-1 w-[500px]">
        <label className='font-bold'>Form Description:</label>
        <textarea
          value={formDescription}
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
            onAddField({ type: 'text', label: '', options: [], preview: '' })
          }
          className="border"
        >
          Add Text Input
        </button>
        <button
          type="button"
          onClick={() =>
            onAddField({
              type: 'textarea',
              label: '',
              options: [],
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
            onAddField({ type: 'checkbox', label: '', options: [''] })
          }
          className="border"
        >
          Add Checkbox
        </button>
        <button
          type="button"
          onClick={() =>
            onAddField({ type: 'radio', label: '', options: [''] })
          }
          className="border"
        >
          Add Radio Button
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
