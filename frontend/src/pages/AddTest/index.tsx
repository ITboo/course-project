import { trpc } from '@/app/lib/trpc';
import { Form, Formik, useFormik } from 'formik';

export const NewIdeaPage = () => {
  const createForm = trpc.createForm.useMutation();

  const formik = useFormik({
    initialValues: {
      id: '2',
      title: '',
      author_id: '',
      description: '',
      img: '',
      likes: 0,
      is_private: false,
      theme:'',
      fields:[]
    },
    onSubmit: async (values) => {
      await createForm.mutateAsync(values);
    }})
  

  return (
<form
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
      <div>
        <input name="title" onChange={(e) => {
          void formik.setFieldValue('title',e.target.value)
        }}/>
        <input name="description" onChange={(e) => {
          void formik.setFieldValue('description',e.target.value)
        }}/>
        <button>Create Idea</button>
      </div>
</form>
  );
};
