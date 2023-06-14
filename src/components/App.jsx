import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = (option) => {
    if (option === 'good') { setGood(prevState => prevState + 1) }
    if (option === 'neutral') { setNeutral(prevState => prevState + 1) }
    if (option === 'bad') { setBad(prevState => prevState + 1); }
  };

  const optionNames = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad || null;
  const positivePercentage = Math.round((good / totalFeedback) * 100);


    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionNames}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
}


export default App;
