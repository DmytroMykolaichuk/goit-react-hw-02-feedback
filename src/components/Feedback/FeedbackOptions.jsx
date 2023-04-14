import { ListButton, Button } from './styles/ListButton.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ListButton>
      <li>
        <Button id="good" onClick={options}>
          Good
        </Button>
      </li>
      <li>
        <Button id="neutral" onClick={options}>
          Neutral
        </Button>
      </li>
      <li>
        <Button id="bad" onClick={options}>
          Bad
        </Button>
      </li>
    </ListButton>
  );
};
