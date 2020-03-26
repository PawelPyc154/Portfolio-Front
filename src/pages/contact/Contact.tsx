import React from 'react';
import './Contact.scss';
// import { MdPhone, MdEmail } from 'react-icons/md';
import { FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import Form from './ContactForm';

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => (
  <main className="Contact">
    <section className="Contact__info">
      <h2 className="Contact__header">Skontaktuj się</h2>
      <p className="Contact__paragraph">Paweł Pyc</p>
      <p className="Contact__paragraph">
        {/* <MdPhone className="Contact__icon" /> */}
        691 115 437
        <CopyToClipboard text="691115437">
          <FaCopy className="Contact__icon Contact__icon--copy" />
        </CopyToClipboard>
      </p>
      <p className="Contact__paragraph">
        {/* <MdEmail className="Contact__icon" /> */}
        pawelpyc154@gmail.com
        <CopyToClipboard text="pawelpyc154@gmail.com">
          <FaCopy className="Contact__icon Contact__icon--copy" />
        </CopyToClipboard>
      </p>
    </section>
    <section className="Contact__formContainer">
      <Form />
    </section>
  </main>
);

export default Contact;
