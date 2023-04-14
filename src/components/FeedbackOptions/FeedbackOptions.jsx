import PropTypes from 'prop-types';
import { ListButton, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ListButton>
      {options.map(option => (
        <li key={option}>
          <Button option={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </ListButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
