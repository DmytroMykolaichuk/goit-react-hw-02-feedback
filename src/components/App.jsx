import React, { Component } from 'react';
import { Statistics } from './Feedback/Statistics ';
import { Notification } from './Feedback/Notification';

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
                    new Error('Erorr button click');
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
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101',
                }}
            >
                <div>
                    <h1>Please leave feedback</h1>
                    <ul>
                        <li>
                            <button id="good" onClick={this.handleFeedback}>
                                Good
                            </button>
                        </li>
                        <li>
                            <button id="neutral" onClick={this.handleFeedback}>
                                Neutral
                            </button>
                        </li>
                        <li>
                            <button id="bad" onClick={this.handleFeedback}>
                                Bad
                            </button>
                        </li>
                    </ul>
                    <h2>Statistics</h2>
                    {!this.activeFeedback ? (
                        <Notification message="There is no feedback" />
                    ) : (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    )}
                </div>
            </div>
        );
    }
}
