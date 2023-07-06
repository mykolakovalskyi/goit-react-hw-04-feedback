import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      {total === 0 && (
        <Notification message="There is no feedback"></Notification>
      )}
      {total > 0 && (
        <>
          <p className={css.statistic}>Good: {good}</p>
          <p className={css.statistic}>Neutral: {neutral}</p>
          <p className={css.statistic}>Bad: {bad}</p>
          <p className={css.statistic}>Total: {total}</p>
          <p className={css.statistic}>
            Positive feedback: {positivePercentage}
          </p>
        </>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
