import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(3, 'Min 3 characters').max(50, 'Max 50 characters'),
      number: Yup.string().required('Number is required').min(3, 'Min 3 characters').max(15, 'Max 15 characters'),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddContact({ ...values, id: generateId() });
      resetForm();
    },
  });

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </label>
      <br />
      <label>
        Number:
        <input type="text" name="number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.number} />
        {formik.touched.number && formik.errors.number ? <div>{formik.errors.number}</div> : null}
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
