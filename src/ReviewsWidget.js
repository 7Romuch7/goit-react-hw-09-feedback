import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

export default function ComponentStatistics () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, neutral, bad };
  
  const onAddition = (option) => {
    switch (option) {
      case 'good':
        setGood(prevGood  => prevGood  + 1)
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      
      default:
        return;
    }
  };
  console.log(option);

  
  const total = good + neutral + bad;
  const positiveFeedback = Math.round((100 * good) / total)
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={[ good, neutral, bad ]} onLeaveFeedback={onAddition}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0
            ? (<Statistics options={Object.keys(option)}
                state={option}
                total={total}
                positiveFeedback={positiveFeedback} />) 
            : (<Notification message="No feedback given"/>)}
        </Section>
      </>
  );
}