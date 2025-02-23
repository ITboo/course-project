import { type FormikProps } from 'formik'

export const Input = ({
  name,
  label,
  formik,
  placeholder,
  type = 'text',
}: {
  name: string
  label: string
  formik: FormikProps<any>
  maxWidth?: number | string
  type?: 'text' | 'password'|'search',
  placeholder?: string,
  className?: string
}) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const invalid = !!touched && !!error

  return (
    <div >
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value)
        }}
        onBlur={() => {
          void formik.setFieldTouched(name)
        }}
        value={value}
        name={name}
        id={name}
        disabled={formik.isSubmitting}
        placeholder={placeholder}
      />
      {invalid && <div>{error}</div>}
    </div>
  )
}