import {useState} from 'react';
import {Helmet} from 'react-helmet';

import {Banner} from '../../components/Banner/Banner';
import {ContinueBtn} from '../../components/ContinueBtn/ContinueBtn';

import moon from '/step3/moon.svg';
import cross from '/step3/cross.svg';
import pizza from '/step3/pizza.svg';
import donut from '/step3/donut.svg';
import salt from '/step3/salt.svg';
import soda from '/step3/soda.svg';

import classes from './Step3.module.scss';

const stepData = [
  {id: 1, title: "I don't rest enough", img: moon},
  {id: 2, title: 'I have a sweet tooth', img: donut},
  {id: 3, title: 'I have too much soda', img: soda},
  {id: 4, title: 'I eat many salty foods', img: salt},
  {id: 5, title: 'I enjoy midnight snacks', img: pizza},
  {id: 6, title: 'None of the above', img: cross},
];

const Step3 = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleClick = e => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove(classes.active));
    e.currentTarget.classList.add(classes.active);
    setIsActive(true);
    setSelectedTitle(stepData[e.currentTarget.id - 1].title);
  };

  return (
    <main className={classes.Step3}>
      <Helmet>
        <title>Step 3 | Food Mentor</title>
      </Helmet>

      <Banner
        header='Destructive behaviors'
        text='We all have them! Which are yours?'
      />

      <div className={classes.items}>
        {stepData.map(item => (
          <button
            id={item.id}
            key={item.id}
            className={classes.item}
            onClick={handleClick}
          >
            <img
              src={item.img}
              alt={item.title}
            />
            <div className={classes.text}>{item.title}</div>
          </button>
        ))}
      </div>

      <ContinueBtn
        step='step3'
        behavior={selectedTitle}
        isActive={isActive}
      />
    </main>
  );
};
export {Step3};
