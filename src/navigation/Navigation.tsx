import React, { useState, useEffect } from 'react';
import './Navigation.scss';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HamburgerMenu from './HamburgerMenu';
import useWindowSize from '../hooks/useWindowSize';

export interface NavigationProps {}

const Navigation: React.SFC<NavigationProps> = () => {
  const [open, setOpen] = useState(window.screen.width > 1000);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width > 1000) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const windowSize = useWindowSize();

  const animate = () => {
    if (windowSize > 1000) {
      return 'desktop';
    }
    return open ? 'open' : 'closed';
  };

  return (
    <motion.nav className="Navigation" animate={animate()}>
      <motion.ul
        className="Navigation__list"
        variants={{
          closed: { x: '-110%', transition: { ease: 'linear' } },
          open: { x: 0, transition: { ease: 'linear' } },
        }}
      >
        <motion.li
          className="Navigation__item Navigation__logo"
          variants={{
            closed: { x: '-200%', opacity: 0 },
            open: { x: 0, opacity: 1, transition: { delay: 0.1 } },
            desktop: { x: [-100, 0], opacity: [0, 1], transition: { delay: 0.4 } },
          }}
        >
          <Link className="Navigation__link " to="/" onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="240.088" height="29.253" viewBox="0 0 240.088 29.253">
              <path
                id="Path_1"
                data-name="Path 1"
                d="M4.146-8.423V0H2.7V-21.006H7.764a7.293,7.293,0,0,1,4.951,1.5,5.521,5.521,0,0,1,1.714,4.387,6.463,6.463,0,0,1-1.912,4.812A7.3,7.3,0,0,1,7.163-8.423Zm0-11.25v9.917H7.134a6.188,6.188,0,0,0,4.321-1.355,4.933,4.933,0,0,0,1.479-3.831q0-4.731-5.435-4.731ZM41.221,0V-3h-.059A5.878,5.878,0,0,1,39.075-.549a5.351,5.351,0,0,1-3.04.916,4.668,4.668,0,0,1-3.384-1.2,4.035,4.035,0,0,1-1.245-3.032q0-3.926,5.2-4.746L41.221-9.3q0-4.834-3.633-4.834a7.4,7.4,0,0,0-4.819,1.992V-13.77A7.347,7.347,0,0,1,35.032-14.9a8.637,8.637,0,0,1,2.688-.469A4.525,4.525,0,0,1,41.3-13.931a6.124,6.124,0,0,1,1.267,4.175V0ZM37.09-7.471a7.155,7.155,0,0,0-3.311,1.091,2.944,2.944,0,0,0-.952,2.454,2.938,2.938,0,0,0,.886,2.2,3.386,3.386,0,0,0,2.468.864,4.632,4.632,0,0,0,3.6-1.6,5.971,5.971,0,0,0,1.436-4.138V-8.071ZM74.795,0h-1.26L70.269-11.309a9.229,9.229,0,0,1-.234-1.26h-.073a7.64,7.64,0,0,1-.293,1.23L66.006,0h-1.26L60.22-15h1.494L65.2-3.032a7.336,7.336,0,0,1,.205,1.26h.117a6.419,6.419,0,0,1,.278-1.26L69.609-15h.923l3.4,11.968a8.392,8.392,0,0,1,.205,1.26h.117a4.872,4.872,0,0,1,.249-1.26L78.062-15h1.392Zm22.91-7.441a7.419,7.419,0,0,0,1.428,4.834,4.792,4.792,0,0,0,3.918,1.743,7.973,7.973,0,0,0,4.922-1.86v1.436a8.767,8.767,0,0,1-5.2,1.655,5.882,5.882,0,0,1-4.687-2.08A8.744,8.744,0,0,1,96.3-7.588a8.366,8.366,0,0,1,1.868-5.53,6.015,6.015,0,0,1,4.856-2.249,5.07,5.07,0,0,1,4.292,1.963,8.654,8.654,0,0,1,1.494,5.361v.6Zm9.7-1.23a6.636,6.636,0,0,0-1.245-4.028,3.877,3.877,0,0,0-3.193-1.436,4.685,4.685,0,0,0-3.494,1.414,6.785,6.785,0,0,0-1.707,4.05Zm22.075-1.582V0H128.13V-9.243l-2.637,2.007V-8.643l2.637-2.007V-22.207h1.348v10.532l2.666-1.978v1.406Zm45.366,1.831V0h-1.45V-21.006h5.068a7.293,7.293,0,0,1,4.951,1.5,5.521,5.521,0,0,1,1.714,4.387,6.463,6.463,0,0,1-1.912,4.812,7.3,7.3,0,0,1-5.354,1.882Zm0-11.25v9.917h2.988a6.188,6.188,0,0,0,4.321-1.355,4.933,4.933,0,0,0,1.479-3.831q0-4.731-5.435-4.731ZM208.081,3.062a8.915,8.915,0,0,1-1.816,3,3.5,3.5,0,0,1-2.563.981,3.136,3.136,0,0,1-1.172-.205V5.493a3.384,3.384,0,0,0,1.23.205q1.8,0,2.842-2.49l1.392-3.325L202.31-15h1.509l4.526,12.217q.146.4.205.6a4.544,4.544,0,0,0,.132.5h.059l.352-1.011L213.926-15h1.465ZM242.725-.659A7.466,7.466,0,0,1,238.74.366a6.3,6.3,0,0,1-4.937-2.1,7.953,7.953,0,0,1-1.875-5.5,8.273,8.273,0,0,1,2.109-5.852,7.055,7.055,0,0,1,5.42-2.278,8.233,8.233,0,0,1,3.325.7v1.523a6.585,6.585,0,0,0-3.53-1,5.387,5.387,0,0,0-4.277,1.9,7.244,7.244,0,0,0-1.641,4.915,7.007,7.007,0,0,0,1.5,4.688A4.938,4.938,0,0,0,238.8-.864a6.545,6.545,0,0,0,3.926-1.2Z"
                transform="translate(-2.695 22.207)"
                fill="#fff"
              />
            </svg>
          </Link>
        </motion.li>
        <motion.li
          className="Navigation__item"
          variants={{
            closed: { x: '-200%', opacity: 0 },
            open: { x: 0, opacity: 1, transition: { delay: 0.2 } },
            desktop: { x: [-100, 0], opacity: [0, 1], transition: { delay: 0.3 } },
          }}
        >
          <NavLink
            className="Navigation__link"
            activeClassName="Navigation__activeLink"
            to="/"
            exact
            onClick={() => setOpen(false)}
          >
            O mnie
          </NavLink>
        </motion.li>
        <motion.li
          className="Navigation__item"
          variants={{
            closed: { x: '-200%', opacity: 0 },
            open: { x: 0, opacity: 1, transition: { delay: 0.3 } },
            desktop: { x: [-100, 0], opacity: [0, 1], transition: { delay: 0.2 } },
          }}
        >
          <NavLink
            className="Navigation__link"
            activeClassName="Navigation__activeLink"
            to="/project"
            onClick={() => setOpen(false)}
          >
            Projekty
          </NavLink>
        </motion.li>
        <motion.li
          className="Navigation__item"
          variants={{
            closed: { x: '-200%', opacity: 0 },
            open: { x: 0, opacity: 1, transition: { delay: 0.4 } },
            desktop: { x: [-100, 0], opacity: [0, 1], transition: { delay: 0.1 } },
          }}
        >
          <NavLink
            className="Navigation__link"
            to="/comments"
            activeClassName="Navigation__activeLink"
            onClick={() => setOpen(false)}
          >
            Komentarze
          </NavLink>
        </motion.li>
        <motion.li
          className="Navigation__item"
          variants={{
            closed: { x: '-200%', opacity: 0 },
            open: { x: 0, opacity: 1, transition: { delay: 0.5 } },
            desktop: { x: [-100, 0], opacity: [0, 1], transition: { delay: 0 } },
          }}
        >
          <NavLink
            className="Navigation__link"
            to="/contact"
            activeClassName="Navigation__activeLink"
            onClick={() => setOpen(false)}
          >
            Kontakt
          </NavLink>
        </motion.li>
      </motion.ul>
      <HamburgerMenu setOpen={setOpen} />
    </motion.nav>
  );
};
export default Navigation;
