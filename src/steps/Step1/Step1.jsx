import {useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet';

import {Banner} from '../../components/Banner/Banner';
import {nextStep} from '../../store/appSlice';

import step1_01 from '/step1/step1-01.png';
import step1_02 from '/step1/step1-02.png';
import step1_03 from '/step1/step1-03.png';
import step1_04 from '/step1/step1-04.png';

import classes from './Step1.module.scss';

const stepData = [
  {id: 1, text: 'Lose Weight', img: step1_01},
  {id: 2, text: 'Gain Muscle', img: step1_02},
  {id: 3, text: 'Develop healthy habits', img: step1_03},
  {id: 4, text: 'Develop healthy habits2', img: step1_04},
];

const Step1 = () => {
  const dispatch = useDispatch();

  return (
    <main className={classes.Step1}>
      <Helmet>
        <title>Step 1 | Food Mentor</title>
      </Helmet>

      <Banner
        header='The Goal'
        text='Focus on the health benefits you need. Balanced nutrition will let you achieve them'
      />

      <div className={classes.title}>What are your goals?</div>

      <div className={classes.items}>
        {stepData.map(item => (
          <button
            key={item.id}
            className={classes.item}
            onClick={() => dispatch(nextStep({data: item.text, step: 'step1'}))}
          >
            <div className={classes.text}>{item.text}</div>

            <img
              src={item.img}
              alt={item.title}
            />
          </button>
        ))}
      </div>
    </main>
  );
};
export {Step1};
