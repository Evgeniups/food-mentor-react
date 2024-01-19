import {useDispatch, useSelector} from 'react-redux';
import {prevStep} from '../../store/appSlice';

import leftIcon from '/left-icon.svg';

import cn from 'classnames';
import classes from './BackButton.module.scss';

const BackButton = () => {
  const currentStep = useSelector(state => state.app.currentStep);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(prevStep())}
      className={cn(classes.BackButton, currentStep > 1 ? '' : classes.hidden)}
    >
      <img
        src={leftIcon}
        alt='Back button'
      />
    </button>
  );
};
export {BackButton};
