import { Component } from 'react';
import './App.css';

import { Statistics } from './components/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Section } from './components/Section'
import { Notification } from './components/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: ''
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) + '%'
  addOpinion = (e) => {
    this.setState(prevState => ({
      [e.target.id]: prevState[e.target.id] + 1
    }));
  }

  render() {

    return (
      <div className="App">
        <Section title='Please leave feedback'>
          <FeedbackOptions addReview={this.addOpinion}></FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          {this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0 ?
            <Notification message="There is no feedback"></Notification> :
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
          }
        </Section>
      </div>
    );
  }
}
