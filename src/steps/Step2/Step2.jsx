import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import {Banner} from '../../components/Banner/Banner';
import {ContinueBtn} from '../../components/ContinueBtn/ContinueBtn';

import cn from 'classnames';
import classes from './Step2.module.scss';

const Step2 = () => {
  const [isImperial, setIsImperial] = useState(true);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
    if (height !== '' && weight !== '') {
      setIsActive(true);
    }
  }, [height, weight]);

  const handlerUnit = () => {
    setIsImperial(!isImperial);
  };

  return (
    <main className={classes.Step2}>
      <Helmet>
        <title>Step 2 | Food Mentor</title>
      </Helmet>

      <Banner
        header='Measure Yourself'
        text='What are your height and body weight?'
      />

      <div className={classes.units}>
        <button
          className={cn(classes.unit, {[classes.active]: isImperial})}
          onClick={handlerUnit}
        >
          Imperial
        </button>

        <button
          className={cn(classes.unit, classes.metric, {[classes.active]: !isImperial})}
          onClick={handlerUnit}
        >
          Metric
        </button>
      </div>

      <div className={classes.inputs}>
        <input
          type='number'
          className={cn(classes.input, classes.height)}
          placeholder={isImperial ? 'Height(ft)' : 'Height(cm)'}
          value={height}
          onChange={e => setHeight(e.target.value)}
        />

        <input
          type='number'
          className={cn(classes.input, classes.weight)}
          placeholder={isImperial ? 'Current Weight(ft)' : 'Current Weight(kg)'}
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </div>

      <ContinueBtn
        isImperial={isImperial}
        height={height}
        weight={weight}
        step='step2'
        isActive={isActive}
      />
    </main>
  );
};
export {Step2};
