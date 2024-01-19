import {useState} from 'react';

import {Popup} from '../Popup/Popup';

import logo from '/logo.svg';

import classes from './Logo.module.scss';

const Logo = () => {
  const [popup, setPopup] = useState(false);
  const handlerClick = e => {
    e.preventDefault();
    setPopup(!popup);
  };
  return (
    <>
      <a
        href='#'
        className={classes.logo}
        onClick={handlerClick}
      >
        <img
          className={classes.img}
          src={logo}
          alt='Logo'
        />
        <h3 className={classes.name}>Food Mentor</h3>
      </a>
      <Popup
        title={'For example'}
        text={'Link to HomePage'}
        isActive={popup}
      />
    </>
  );
};
export {Logo};
