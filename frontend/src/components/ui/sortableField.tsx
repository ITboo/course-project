import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { Icon } from "./icon";

interface SortableFieldProps {
    field: FormField;
    index: number;
    values: FormData;
    setValues: (values: FormData) => void;
  }
  
export function SortableField({ field, index, values, setValues }: SortableFieldProps) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: field.id || index.toString() });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      zIndex: isDragging ? 1 : 0,
    };
  
    const addOption = (fieldIndex: number) => {
      const newFields = [...values.fields];
      if (!newFields[fieldIndex].options) {
        newFields[fieldIndex].options = [];
      }
      newFields[fieldIndex].options?.push(`Option ${(newFields[fieldIndex].options?.length || 0) + 1}`);
      setValues({
        ...values,
        fields: newFields,
      });
    };
  
    const updateOption = (
      fieldIndex: number,
      optionIndex: number,
      newValue: string
    ) => {
      const newFields = [...values.fields];
      if (newFields[fieldIndex].options) {
        newFields[fieldIndex].options![optionIndex] = newValue;
        setValues({
          ...values,
          fields: newFields,
        });
      }
    };
  
    const removeOption = (fieldIndex: number, optionIndex: number) => {
      const newFields = [...values.fields];
      if (newFields[fieldIndex].options) {
        newFields[fieldIndex].options = newFields[fieldIndex].options!.filter((_, i) => i !== optionIndex);
        setValues({
          ...values,
          fields: newFields,
        });
      }
    };
  
    const removeField = (index: number) => {
      const newFields = values.fields.filter((_, i) => i !== index);
      setValues({
        ...values,
        fields: newFields,
      });
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`border rounded-md p-4 bg-gray-50 ${isDragging ? 'opacity-50' : ''}`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4 flex-grow">
            <button
              type="button"
              className="cursor-grab text-gray-500 hover:text-gray-700"
              {...attributes}
              {...listeners}
            >
              <Icon name="grip" size={20} />
            </button>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              <input
                type="text"
                value={field.label}
                onChange={(e) => {
                  const newFields = [...values.fields];
                  newFields[index].label = e.target.value;
                  setValues({ ...values, fields: newFields });
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Field Label"
              />
              <select
                value={field.type}
                onChange={(e) => {
                  const newFields = [...values.fields];
                  newFields[index].type = e.target.value as FieldType;
                  setValues({ ...values, fields: newFields });
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="text">Text Input</option>
                <option value="textarea">Textarea</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio Buttons</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => removeField(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Icon name="delete" size={20} />
            </button>
          </div>
        </div>
  
        {(field.type === 'checkbox' || field.type === 'radio') && (
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Options (minimum 2 required)
              </label>
              <button
                type="button"
                onClick={() => addOption(index)}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Add Option
              </button>
            </div>
            {field.options?.map((option, optionIndex) => (
              <div key={optionIndex} className="flex gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    updateOption(
                      index,
                      optionIndex,
                      e.target.value
                    )
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() =>
                    removeOption(index, optionIndex)
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  <Icon name="delete" size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  