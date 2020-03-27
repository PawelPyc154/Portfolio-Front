import React from 'react';
import './Contact.scss';
// import { MdPhone, MdEmail } from 'react-icons/md';
import { FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';
import Form from './ContactForm';

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => (
  <main className="Contact">
    <section className="Contact__info">
      <motion.h2 className="Contact__header" animate={{ y: [-100, 0], opacity: [0, 1] }} transition={{ delay: 0.6 }}>
        Skontaktuj się
      </motion.h2>
      <motion.p className="Contact__paragraph" animate={{ y: [-100, 0], opacity: [0, 1] }} transition={{ delay: 0.4 }}>
        Paweł Pyc
      </motion.p>
      <motion.p className="Contact__paragraph" animate={{ y: [-100, 0], opacity: [0, 1] }} transition={{ delay: 0.2 }}>
        {/* <MdPhone className="Contact__icon" /> */}
        691 115 437
        <CopyToClipboard text="691115437">
          <FaCopy className="Contact__icon Contact__icon--copy" />
        </CopyToClipboard>
      </motion.p>
      <motion.p className="Contact__paragraph" animate={{ y: [-100, 0], opacity: [0, 1] }} transition={{ delay: 0 }}>
        <a className="Contact__link" href="mailto: pawelpyc154@gmail.com?subject=your title&body=TThe message">
          pawelpyc154@gmail.com
        </a>
        <CopyToClipboard text="pawelpyc154@gmail.com">
          <FaCopy className="Contact__icon Contact__icon--copy" />
        </CopyToClipboard>
      </motion.p>
    </section>
    <section className="Contact__formContainer">
      <Form />
    </section>
  </main>
);

export default Contact;
