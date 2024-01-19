import {useSelector} from 'react-redux';

import {Step1} from '../../steps/Step1/Step1';
import {Step2} from '../../steps/Step2/Step2';
import {Step3} from '../../steps/Step3/Step3';
import {Step4} from '../../steps/Step4/Step4';

const Poll = () => {
  const currentStep = useSelector(state => state.app.currentStep);

  const steps = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
  };

  return steps[currentStep];
};
export {Poll};
