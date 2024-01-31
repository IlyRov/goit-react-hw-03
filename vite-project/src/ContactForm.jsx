import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(3, 'Min 3 characters').max(50, 'Max 50 characters'),
      phone: Yup.string().required('Phone number is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddContact({ ...values, id: `id-${Date.now()}` });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Phone:
        <input type="text" {...formik.getFieldProps('phone')} />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: 'red' }}>{formik.errors.phone}</div>
        ) : null}
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
