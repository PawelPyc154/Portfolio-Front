import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './ContactForm.scss';

export interface ContactFormProps {}

const ContactForm: React.SFC<ContactFormProps> = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email')
      .required('Required'),

    message: yup
      .string()
      .required('Required')
      .min(6, 'Too Short!'),
  });

  return (
    <Formik
      validateOnChange
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        message: '',
      }}
      onSubmit={({ email, message }, { setSubmitting }) => {
        setSubmitting(true);
        console.log(email);
        console.log(message);

        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting, isValid }) => (
        <Form className="Form">
          {errors.email && touched.email && <div className="Form__validation">{errors.email}</div>}
          <input
            style={errors.email && touched.email ? { border: '1px solid #e74c3c' } : {}}
            className="Form__input"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          />
          {errors.message && touched.message && <div className="Form__validation">{errors.message}</div>}
          <textarea
            style={errors.message && touched.message ? { border: '1px solid #e74c3c' } : {}}
            className="Form__input Form__textarea"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder="Wiadomość"
          />
          <button
            style={isValid && values.email && values.message ? { border: '1px solid #2ecc71' } : {}}
            disabled={isValid && isSubmitting}
            type="submit"
            className="Form__btn"
          >
            Wyślij
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
