import React, { Dispatch, SetStateAction } from 'react';
import './HamburgerMenu.scss';
import { motion } from 'framer-motion';

interface HamburgerMenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: React.SFC<HamburgerMenuProps> = ({ setOpen }) => (
  <button type="button" className="HamburgerMenu" onClick={() => setOpen((prevState: boolean) => !prevState)}>
    <motion.span
      className="HamburgerMenu__span"
      variants={{
        closed: { rotate: 0 },
        open: { rotate: 135, transition: { duration: 0.4 } },
      }}
    >
      <motion.span
        className="HamburgerMenu__childSpan"
        variants={{
          open: { y: 0 },
          closed: { y: -7 },
        }}
      />
      <motion.span className="HamburgerMenu__childSpan" />
      <motion.span
        className="HamburgerMenu__childSpan"
        variants={{
          open: { y: 0, rotate: 90 },
          closed: { y: 7, rotate: 0 },
        }}
      />
    </motion.span>
  </button>
);

export default HamburgerMenu;
