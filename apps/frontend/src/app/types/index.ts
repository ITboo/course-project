interface TextField {
  id: string;
  type: 'text';
  label: string;
  placeholder: string;
  options:string[]
  order: string;
}

interface TextareaField {
  id: string;
  type: 'textarea';
  label: string;
  placeholder: string;
  options:string[]
  order: string;
}

interface RadioField {
  id: string;
  type: 'radio';
  label: string;
  options: string[];
  order: string;
}

interface CheckboxField {
  id: string;
  type: 'checkbox';
  label: string;
  options: string[];
  order: string;
}

type Field = TextField | TextareaField | RadioField | CheckboxField;

export interface FormField {
  id: string;
  label: string;
  type: string;
  options?: [];
  placeholder?: string;
}

export interface SortableFieldProps {
  field: Field;
  index: number;
  values: FormData;
  setValues: (values: FormData) => void;
}

export type FieldType = 'text' | 'textarea' | 'checkbox' | 'radio';

export interface FormData {
  title: string;
  description: string;
  theme: string;
  isPrivate: boolean;
  fields: Field[];
  img: string;
  author_id: string;
}
export interface FormErrors {
  title?: string;
  description?: string;
  fields?: string;
}

export interface Comment {
    text: string;
    formId: string;
    id: string;
    author_id: string;
    created_at: string;
  }