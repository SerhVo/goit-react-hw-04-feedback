import FeedbackOption from "./Feedback/feedback";
import React, { Component } from 'react';
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import Statistics from "components/Statistics/Statistics";








export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const value = event.target.innerText;
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;
    const option = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            option={option}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message=":( There is no feedback" />
          )}
        </Section>
      </>
    );
  }
};



