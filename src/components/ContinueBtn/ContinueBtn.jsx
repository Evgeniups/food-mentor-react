import {useDispatch} from 'react-redux';

import {nextStep} from '../../store/appSlice';

import cn from 'classnames';
import classes from './ContinueBtn.module.scss';

const ContinueBtn = ({isImperial, height, weight, step, behavior, isActive}) => {
  const dispatch = useDispatch();
  const data = step === 'step2' ? {isImperial, height, weight} : behavior;

  return (
    <button
      className={cn(classes.ContinueBtn, {[classes.disabled]: !isActive})}
      onClick={() => dispatch(nextStep({data, step}))}
    >
      Continue
    </button>
  );
};
export {ContinueBtn};
