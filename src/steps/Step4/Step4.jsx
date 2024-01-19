import {useDispatch, useSelector} from 'react-redux';
import {Helmet} from 'react-helmet';

import {nextStep} from '../../store/appSlice';
import {Banner} from '../../components/Banner/Banner';
import {Popup} from '../../components/Popup/Popup';

import step4 from '/step4/step4.png';

import classes from './Step4.module.scss';

const stepData = [
  {id: 1, title: 'Hardly at all'},
  {id: 2, title: 'Fitness 1-2 times a week'},
  {id: 3, title: 'Fitness 3-5 times a week'},
  {id: 4, title: 'Fitness 5-7 times a week'},
];

const Step4 = () => {
  const dispatch = useDispatch();
  const isFinish = useSelector(state => state.app.isFinish);
  const state = useSelector(state => state.app);
  const popupText = JSON.stringify(state.data);

  if (isFinish) {
    localStorage.setItem(Date.now(), popupText);
    console.log(
      `%cDONE. %cCollected data: %c ${popupText} `,
      'background: #222; color: #5fcb39; font-size: 18px',
      'background: #222; color: #f80; font-size: 16px',
      'background: #F1F3F4; color: #0066cc; font-style: italic; font-weight:700 '
    );
    console.log(`%cAll results in localStorage.`, 'background: #222; color: #02A0F9; font-size: 18px');
  }

  return (
    <>
      <main className={classes.Step4}>
        <Helmet>
          <title>Step 4 | Food Mentor</title>
        </Helmet>

        <Banner
          header='Physical exercise'
          text='Physical exercise means a lot for a woman who wants to lose kilos and works at the office'
        />

        <div className={classes.title}>How active are you during the day?</div>

        <div className={classes.content}>
          <img
            className={classes.img}
            src={step4}
            alt='Physical exercise'
          />
          <div className={classes.items}>
            {stepData.map(item => (
              <button
                key={item.id}
                className={classes.item}
                onClick={() => dispatch(nextStep({data: item.title, step: 'step4'}))}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </main>

      <Popup
        title='collected data'
        text={popupText}
        isActive={isFinish}
      />
    </>
  );
};

export {Step4};
