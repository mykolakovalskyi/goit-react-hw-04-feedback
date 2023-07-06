import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import css from './App.module.css';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const onFeedbackLeave = e => {
    const { name } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 'No feedback';
    }
    return Math.round((good / total) * 100) + '%';
  };

  return (
    <>
      <Section title={<h1>Please leave feedback</h1>}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onFeedbackLeave}
        ></FeedbackOptions>
      </Section>
      <Section title={<h2 className={css.title}>Statistics</h2>}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </>
  );
}
