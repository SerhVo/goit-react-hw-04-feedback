import { useEffect, useState } from 'react';
import FeedbackOption from "./Feedback/feedback";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import Statistics from "components/Statistics/Statistics";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState(0);
  const options = Object.keys({ good, neutral, bad });


  const leaveFeedback = event => {
    const value = event.target.innerText;
    switch (value) {
      case 'good': setGood(s => s + 1);
        break;
      case 'neutral': setNeutral(s => s + 1);
        break;
      case 'bad': setBad(s => s + 1);
        break;
      default: return 'something went wrong';
    }
  }

  useEffect(() => {
    setTotalFeedback(good + neutral + bad);
    setPositiveFeedbackPercentage(((good / totalFeedback) * 100).toFixed());
  }, [good, neutral, bad, totalFeedback]);


  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOption
          option={options}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message=":( There is no feedback" />
        )}
      </Section>
    </>
  );
};




