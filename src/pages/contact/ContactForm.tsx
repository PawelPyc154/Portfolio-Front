import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './ContactForm.scss';
import { motion } from 'framer-motion';
import axios from 'axios';

export interface ContactFormProps {}

const ContactForm: React.SFC<ContactFormProps> = () => {
  const [animateVariant, setAnimateVariant] = useState('hidden');
  useEffect(() => {
    setAnimateVariant('visible');
  }, []);

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    subject: yup.string().required('Required').min(6, 'Too Short!').max(50, 'Too Long!'),
    message: yup.string().required('Required').min(6, 'Too Short!').max(500, 'Too Long!'),
  });

  const handleSubmit = async (
    email: string,
    subject: string,
    message: string,
    resetForm: () => void,
  ) => {
    try {
      await axios.post('https://portfolio321123.herokuapp.com/email', { email, subject, message });

      await setAnimateVariant('hidden');
      await resetForm();
      await setTimeout(() => {
        setAnimateVariant('visible');
      }, 1400);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      validateOnChange
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        subject: '',
        message: '',
      }}
      onSubmit={async ({ email, subject, message }, { setSubmitting, resetForm }) => {
        await setSubmitting(true);
        await handleSubmit(email, subject, message, resetForm);
        await setSubmitting(false);
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
            // animate={{ x: [100, 0], opacity: [0, 1] }}
            initial="hidden"
            animate={animateVariant}
            variants={{
              visible: { x: 0, opacity: 1, transition: { delay: 0.6, duration: 0.8 } },
              hidden: { x: 100, opacity: 0, transition: { delay: 0.6, duration: 0.8 } },
            }}
          />

          {errors.subject && touched.subject && (
            <div className="Form__validation">{errors.subject}</div>
          )}
          <motion.input
            style={errors.subject && touched.subject ? { border: '1px solid #e74c3c' } : {}}
            className="Form__input"
            type="subject"
            name="subject"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            placeholder="Temat"
            // animate={{ x: [100, 0], opacity: [0, 1] }}
            // transition={{ delay: 0.4 }}
            initial="hidden"
            animate={animateVariant}
            variants={{
              visible: { x: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
              hidden: { x: 100, opacity: 0, transition: { delay: 0.4, duration: 0.8 } },
            }}
          />
          {errors.message && touched.message && (
            <div className="Form__validation">{errors.message}</div>
          )}
          <motion.textarea
            style={errors.message && touched.message ? { border: '1px solid #e74c3c' } : {}}
            className="Form__input Form__textarea"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder="Wiadomość"
            // animate={{ x: [100, 0], opacity: [0, 1] }}
            // transition={{ delay: 0.2 }}
            initial="hidden"
            animate={animateVariant}
            variants={{
              visible: { x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
              hidden: { x: 100, opacity: 0, transition: { delay: 0.2, duration: 0.8 } },
            }}
          />
          <motion.button
            style={
              isValid && values.email && values.subject && values.message
                ? {
                    border: '1px solid #2ecc71',
                    backgroundColor: isSubmitting ? '#2ecc71' : 'transparent',
                  }
                : {}
            }
            disabled={isValid && isSubmitting}
            type="submit"
            className="Form__btn"
            // animate={{ x: [100, 0], opacity: [0, 1] }}
            // transition={{ delay: 0 }}
            initial="hidden"
            animate={animateVariant}
            variants={{
              visible: { x: 0, opacity: 1, transition: { delay: 0, duration: 0.8 } },
              hidden: { x: 100, opacity: 0, transition: { delay: 0, duration: 0.8 } },
            }}
          >
            Wyślij
          </motion.button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
