import React from "react";
import PropTypes from "prop-types";
import { Option, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <Option>
        {options.map(option => (
            <Button
                key={option}
                onClick={() => onLeaveFeedback(option)}
                type="button"
            >
                {option}
            </Button>
        ))}
    </Option>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;