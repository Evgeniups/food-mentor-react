import classes from './Banner.module.scss';

const Banner = ({header, text}) => {
  return (
    <div className={classes.Banner}>
      <h1 className={classes.header}>{header}</h1>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
export {Banner};
