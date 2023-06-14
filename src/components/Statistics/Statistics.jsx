import React from 'react';
import PropTypes from 'prop-types';
import { StatsList, Item, Span } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatsList>
    <Item>Good: {good}</Item>
    <Item>Neutral: {neutral}</Item>
    <Item>Bad: {bad}</Item>
    <Item>Total: {total}</Item>
    <Item>Positive feedback:
      {positivePercentage === 50 && <Span style={{ backgroundColor: '#ffa500' }}>{positivePercentage} %</Span>}
      {positivePercentage < 50 && <Span style={{backgroundColor: '#ff0000'}}>{positivePercentage} %</Span>}
      {positivePercentage > 50 && <Span style={{ backgroundColor: '#3cb371' }}>{positivePercentage} %</Span>}
    </Item>
  </StatsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;