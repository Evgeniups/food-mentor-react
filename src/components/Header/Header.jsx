import {BackButton} from '../BackButton/BackButton';
import {Logo} from '../Logo/Logo';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.Header}>
      <BackButton />
      <Logo />
    </header>
  );
};
export {Header};
