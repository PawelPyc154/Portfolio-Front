import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './ContactForm.scss';
import { motion } from 'framer-motion';

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
          <motion.input
            style={errors.email && touched.email ? { border: '1px solid #e74c3c' } : {}}
            className="Form__input"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
            animate={{ x: [100, 0], opacity: [0, 1] }}
          />
          {errors.message && touched.message && <div className="Form__validation">{errors.message}</div>}
          <motion.textarea
            style={errors.message && touched.message ? { border: '1px solid #e74c3c' } : {}}
            className="Form__input Form__textarea"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder="Wiadomość"
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2 }}
          />
          <motion.button
            style={isValid && values.email && values.message ? { border: '1px solid #2ecc71' } : {}}
            disabled={isValid && isSubmitting}
            type="submit"
            className="Form__btn"
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.4 }}
          >
            Wyślij
          </motion.button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
