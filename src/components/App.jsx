import React, { Component } from 'react';
import { Statistics } from './Feedback/Statistics ';
import { Notification } from './Feedback/Notification';
import { GlobalStyle } from './Feedback/styles/GlobalStyle.styled';
import { Layout } from './Feedback/Layout';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section ';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  activeFeedback = false;

  handleFeedback = e => {
    this.activeFeedback = true;
    this.setState(({ good, neutral, bad }) => {
      switch (e.target.id) {
        case 'good':
          return { good: good + 1 };
        case 'neutral':
          return { neutral: neutral + 1 };
        case 'bad':
          return { bad: bad + 1 };
        default:
          throw new Error('Unknown feedback type');
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 * good) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.handleFeedback}
            onLeaveFeedback={this.activeFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {!this.activeFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Layout>
    );
  }
}
