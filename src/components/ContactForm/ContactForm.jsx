import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from "react";

const ContactForm = ({onSubmit}) => {
  const nameId = useId();
  const numberId = useId();
 
  const initialValues = {
    name: '',
    number: ''
  };

   const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Required')
  });

 
  return (
     <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.contactForm}>
          <div className={s.formItem}>
            <label className={s.label} htmlFor={nameId}>Name</label>
            <Field className={s.input} name="name" type="text" placeholder="Enter name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
          <div className={s.formItem}>
            <label className={s.label} htmlFor={numberId}>Number</label>
            <Field className={s.input} name="number" type="text" placeholder="Enter number" />
            <ErrorMessage name="number" component="div" className={s.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
