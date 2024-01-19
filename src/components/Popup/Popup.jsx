import {useRef} from 'react';

import classes from './Popup.module.scss';

import cn from 'classnames';

const Popup = ({title, text, isActive}) => {
  const popup = useRef();

  return (
    <div
      ref={popup}
      className={cn(classes.Popup, {[classes.active]: isActive})}
    >
      <button
        className={classes['close-btn']}
        onClick={() => {
          popup.current.classList.remove(classes.active);
        }}
      >
        X
      </button>
      <div className={classes.title}>{title}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};
export {Popup};
